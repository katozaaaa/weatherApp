import { getIP, getLocationByIP } from '@/features/FindLocationByIP';
import { setupSearchingAnimation } from './animateSearching';

export const getFindLocationAndIP = (dispatchers) => {
    return async () => {
        dispatchers.setIsSearching(true);
        const animationIntervalID = setupSearchingAnimation(
            dispatchers.setLocationName
        );

        const ip = await getIP();
        console.log(ip);
        const location = await getLocationByIP(ip);
        
        clearInterval(animationIntervalID);
        dispatchers.setIsSearching(false);

        dispatchers.setLocationName(
            [location['city'], location['country_name']].join(', ')
        );

        dispatchers.setLocationCoords({ 
            lat: location.latitude, 
            lon: location.longitude 
        });
    }
}