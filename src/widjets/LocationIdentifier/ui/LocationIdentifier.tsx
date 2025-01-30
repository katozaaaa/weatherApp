import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocationByIP } from '@/features/SearchLocationByIP';
import { getSearchLocationByIP } from '@/features/SearchLocationByIP';
import { SearchLocation } from '@/features/SearchLocation';
import { useLocationName } from '../model/hooks/useLocationName';
import { getSearchLocationByLocationName } from '@/features/SearchLocation';

export const LocationIdentifier = (props) => {
    const {
        className,
        dispatchLocationCoords,
        clearCurrentWeather
    } = props;

    const [locationName, dispatchLocationName] = useLocationName();
    const [isSearching, setIsSearching] = useState(false);

    const updateLocation = (location) => {
        dispatchLocationName({
            type: 'updated',
            locationName: [
                location.placeName, 
                location.countryName || ''
            ].join(', ')
        });

        dispatchLocationCoords({
            type: 'updated',
            location: {
                lat: location.lat,
                lon: location.lon
            }
        });
    };

    const onStartSearchingByLocationName = () => {
        clearCurrentWeather();

        dispatchLocationCoords({
            type: 'cleared'
        });
    };

    const searchLocationByLocationName = getSearchLocationByLocationName(
        onStartSearchingByLocationName,
        updateLocation
    );

    const onStartSearchingByIP = () => {
        setIsSearching(true);
    };
    
    const onFullfilledSearchingByIP = (location) => {
        setIsSearching(false);
        updateLocation(location);
        clearCurrentWeather();
    };

    const searchLocationByIP = getSearchLocationByIP(
        onStartSearchingByIP, 
        onFullfilledSearchingByIP
    );

    useEffect(() => {
        searchLocationByIP();
    }, []);

    return (
        <div className={cn(styles.LocationIdentifier, className)}>
            <SearchLocation 
                locationName={locationName}
                dispatchLocationName={dispatchLocationName}
                searchLocationByLocationName={searchLocationByLocationName}
                isSearching={isSearching}
            />
            <SearchLocationByIP 
                searchLocationByIP={searchLocationByIP}
                isSearching={isSearching}
            />
        </div>
    );
};