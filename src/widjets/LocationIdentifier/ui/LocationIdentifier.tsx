import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocationByIP } from '@/features/SearchLocationByIP';
import { SearchLocation } from '@/features/SearchLocation';
import { setupSearchingAnimation } from '../model/animateSearching';
import { getSearchLocationByIP } from '../model/getSearchLocationByIP';
import { useLocationName } from '../model/useLocationName';

export const LocationIdentifier = (props) => {
    const {
        className,
        dispatchLocationCoords,
        clearCurrentWeather
    } = props;

    const [locationName, dispatchLocationName] = useLocationName();
    const [isSearching, setIsSearching] = useState(false);
    
    let animationIntervalID;

    const onStartSearching = () => {
        clearInterval(animationIntervalID);
        setIsSearching(true);

        animationIntervalID = setupSearchingAnimation((locationName) => {
            dispatchLocationName({
                type: 'updated',
                locationName: locationName,
            })
        });
    }
    
    const onFullfilledSearching = (location) => {
        clearInterval(animationIntervalID);
        setIsSearching(false);

        dispatchLocationName({
            type: 'updated',
            locationName: [location.placeName, location.countryName].join(', '),
        });

        dispatchLocationCoords({
            type: 'updated',
            location: { 
                lat: location.lat, 
                lon: location.lon 
            }
        });

        clearCurrentWeather();
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
                dispatchLocationName={dispatchLocationName}
                dispatchLocationCoords={dispatchLocationCoords}
                isSearching={isSearching}
                clearCurrentWeather={clearCurrentWeather}
            />
            <SearchLocationByIP 
                searchLocationAndIP={searchLocationByIP}
                isSearching={isSearching}
            />
        </div>
    )
}