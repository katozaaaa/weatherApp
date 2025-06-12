import { useCallback } from 'react';
import { getIP, getLocationByIP } from '@/features/SearchLocationByIP';

export const useSearchLocationByIP = (dispatchers) => {
    const {
        updateLocation, 
        setIsSearching, 
        clearWeather
    } = dispatchers;

    const searchLocationByIP = useCallback(() => {
        setIsSearching(true);

        getIP()
            .then((ip) => {
                getLocationByIP(ip)
                    .then(
                        (location) => {
                            updateLocation(location);
                        },
                        (error) => {
                            updateLocation(null);
                        }
                    )
                    .finally(() => {
                        setIsSearching(false);
                        clearWeather();
                    });
            });
    }, [updateLocation, setIsSearching, clearWeather]);

    return searchLocationByIP;
};