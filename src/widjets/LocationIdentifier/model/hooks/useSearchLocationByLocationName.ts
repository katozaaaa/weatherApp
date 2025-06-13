import { useCallback } from 'react';
import { getLocationByLocationName } from '@/features/SearchLocation';

export const useSearchLocationByLocationName = (dispatchers) => {
    const {
        updateLocation,
        dispatchLocationCoords,
        clearWeather,
        setError
    } = dispatchers;

    return useCallback((locationName) => {
        setError(null);
        clearWeather();

        dispatchLocationCoords({
            type: 'cleared'
        });

        getLocationByLocationName(locationName)
            .then(
                updateLocation,
                setError
            );
    }, []);
};