import { useCallback } from 'react';
import { getIP, getLocationByIP } from '@/features/SearchLocationByIP';

export const useSearchLocationByIP = (dispatchers) => {
    const {
        updateLocation, 
        setIsSearching, 
        clearCurrentWeather
    } = dispatchers;

    const searchLocationByIP = useCallback(() => {
        setIsSearching(true);

        getIP().then((ip) => {
            getLocationByIP(ip).then((location) => {
                setIsSearching(false);
                updateLocation(location);
                clearCurrentWeather();
            });
        });
    }, []);

    return searchLocationByIP;
};