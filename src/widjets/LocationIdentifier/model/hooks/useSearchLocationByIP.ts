import { useCallback, Dispatch, SetStateAction } from 'react';
import { getLocationByIP } from '@/features/SearchLocationByIP';
import { LocationData } from '@/features/SearchLocation';

interface Dispatchers {
    updateLocation: (location: LocationData | null) => void,
    setIsSearching:  Dispatch<SetStateAction<boolean>>,
    clearWeather: () => void,
    setError: (error: Error | null) => void,
    IP: string | null
}

export const useSearchLocationByIP = (dispatchers: Dispatchers) => {
    const {
        updateLocation, 
        setIsSearching, 
        clearWeather,
        setError,
        IP
    } = dispatchers;

    return useCallback(() => {
        if (!IP) {
            return;
        }

        setIsSearching(true);

        getLocationByIP(IP)
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
    }, [
        updateLocation,
        setIsSearching,
        clearWeather,
        setError,
        IP
    ]);
};