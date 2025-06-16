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

    return useCallback((location: LocationData | null) => {
        if (location) {
            dispatchLocationName({
                type: 'updated',
                locationName: [
                    location.placeName,
                    location.countryName || ''
                ].join(', ')
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