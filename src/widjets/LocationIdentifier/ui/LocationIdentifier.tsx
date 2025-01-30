import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocationByIP } from '@/features/SearchLocationByIP';
import { getSearchLocationByIP } from '@/features/SearchLocationByIP';
import { SearchLocation } from '@/features/SearchLocation';
import { useLocationName } from '../model/useLocationName';

export const LocationIdentifier = (props) => {
    const {
        className,
        dispatchLocationCoords,
        clearCurrentWeather
    } = props;

    const [locationName, dispatchLocationName] = useLocationName();
    const [isSearching, setIsSearching] = useState(false);

    const onStartSearching = () => {
        setIsSearching(true);
    }
    
    const onFullfilledSearching = (location) => {
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
                searchLocationByIP={searchLocationByIP}
                isSearching={isSearching}
            />
        </div>
    )
}