import { useCallback } from 'react';

export const useUpdateLocation = (dispatchers) => {
    const {
        dispatchLocationName,
        dispatchLocationCoords
    } = dispatchers;

    const updateLocation = useCallback((location) => {
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

    return updateLocation;
};