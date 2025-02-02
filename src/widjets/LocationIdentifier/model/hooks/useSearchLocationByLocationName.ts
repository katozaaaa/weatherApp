import { useCallback } from 'react';
import { getLocationByLocationName } from '@/features/SearchLocation';

export const useSearchLocationByLocationName = (dispatchers) => {
    const {
        updateLocation,
        dispatchLocationCoords,
        clearCurrentWeather
    } = dispatchers;

    const searchLocationByLocationName = useCallback((locationName) => {
        clearCurrentWeather();

        dispatchLocationCoords({
            type: 'cleared'
        });

        getLocationByLocationName(locationName).then(updateLocation);
    }, []);

    return searchLocationByLocationName;
};