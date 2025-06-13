import { useCallback } from 'react';
import { getLocationByIP } from '@/features/SearchLocationByIP';

export const useSearchLocationByIP = (dispatchers) => {
    const {
        updateLocation, 
        setIsSearching, 
        clearWeather,
        setError
    } = dispatchers;

    return useCallback(() => {
        setIsSearching(true);

        getLocationByIP()
            .then(
                (location) => {
                    setError(null);
                    updateLocation(location);
                },
                (error) => {
                    setError(error);
                    updateLocation(null);
                }
            )
            .finally(() => {
                setIsSearching(false);
                clearWeather();
            });
    }, [ updateLocation, setIsSearching, clearWeather, setError ]);
};