import { useCallback, Dispatch } from 'react';
import { LocationData, LocationNameAction } from '@/features/SearchLocation';
import { LocationCoordsAction } from '../reducers/locationCoordsReducer.ts';

interface Dispatchers {
    dispatchLocationName: Dispatch<LocationNameAction>
    dispatchLocationCoords: Dispatch<LocationCoordsAction>
}

export const useUpdateLocation = (dispatchers: Dispatchers) => {
    const {
        dispatchLocationName,
        dispatchLocationCoords
    } = dispatchers;

    return useCallback((location: LocationData) => {
        if (
            location.lat &&
            location.lon &&
            (location.placeName || location.countryName)
        ) {
            dispatchLocationName({
                type: 'updated',
                locationName: [
                    location.placeName,
                    location.placeName && location.countryName ? ', ' : '',
                    location.countryName
                ].filter(Boolean).join('')
            });

            dispatchLocationCoords({
                type: 'updated',
                location: {
                    lat: location.lat,
                    lon: location.lon
                }
            });
        } else {
            dispatchLocationName({
                type: 'cleared'
            });

            dispatchLocationCoords({
                type: 'cleared'
            });
        }
    }, [ dispatchLocationName, dispatchLocationCoords ]);
};