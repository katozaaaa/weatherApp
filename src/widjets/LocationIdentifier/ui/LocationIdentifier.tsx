import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocationByIP } from '@/features/SearchLocationByIP';
import { SearchLocation } from '@/features/SearchLocation';
import { setupSearchingAnimation } from '../model/animateSearching';
import { getSearchLocationByIP } from '../model/getSearchLocationByIP';

export const LocationIdentifier = (props) => {
    const {
        className,
        setLocationCoords,
    } = props;

    const [locationName, setLocationName] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    
    let animationIntervalID;

    const onStartSearching = () => {
        clearInterval(animationIntervalID);
        setIsSearching(true);
        animationIntervalID = setupSearchingAnimation(setLocationName);
    }
    
    const onFullfilledSearching = (location) => {
        clearInterval(animationIntervalID);
        setIsSearching(false);

        setLocationName(
            [location['city'], location['country_name']].join(', ')
        );

        setLocationCoords({ 
            lat: location.latitude, 
            lon: location.longitude 
        });
    }

    const searchLocationByIP = getSearchLocationByIP(
        onStartSearching, 
        onFullfilledSearching
    );

    useEffect(() => {
        searchLocationByIP();
    }, []);

    return (
        <div className={cn(styles.LocationIdentifier, className)}>
            <SearchLocation 
                locationName={locationName}
                setLocationName={setLocationName}
                setLocationCoords={setLocationCoords}
                isSearching={isSearching}
            />
            <SearchLocationByIP 
                searchLocationAndIP={searchLocationByIP}
                isSearching={isSearching}
            />
        </div>
    )
}