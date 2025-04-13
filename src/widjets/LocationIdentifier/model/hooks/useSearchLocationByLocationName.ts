import { useCallback } from 'react';
import { getLocationByLocationName } from '@/features/SearchLocation';

export const useSearchLocationByLocationName = (dispatchers) => {
    const {
        updateLocation,
        dispatchLocationCoords,
        clearWeather
    } = dispatchers;

    const searchLocationByLocationName = useCallback((locationName) => {
        clearWeather();

        dispatchLocationCoords({
            type: 'cleared'
        });

        getLocationByLocationName(locationName).then(updateLocation);
    }, []);

    return searchLocationByLocationName;
};