import { getIP, getLocationByIP } from '@/features/SearchLocationByIP';

export const getSearchLocationByIP = (onStartSearching, onFullfilledSearching) => {
    return async () => {
        onStartSearching();

        getIP().then((ip) => {
            getLocationByIP(ip).then(onFullfilledSearching);
        });
    }
}