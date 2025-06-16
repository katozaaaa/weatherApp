import { useCallback, Dispatch, SetStateAction } from 'react';
import { getLocationByIP } from '@/features/SearchLocationByIP';
import { LocationData } from '@/features/SearchLocation';

interface Dispatchers {
    updateLocation: (location: LocationData | null) => void,
    setIsSearching:  Dispatch<SetStateAction<boolean>>,
    clearWeather: () => void,
    setError: (error: Error | null) => void,
}

export const useSearchLocationByIP = (dispatchers: Dispatchers) => {
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