import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocationByIP } from '@/features/SearchLocationByIP';
import { SearchLocation, useLocationName } from '@/features/SearchLocation';
import { useUpdateLocation } from '../model/hooks/useUpdateLocation';
import { useSearchLocationByIP } from '../model/hooks/useSearchLocationByIP';
import { useSearchLocationByLocationName } from '../model/hooks/useSearchLocationByLocationName';

export const LocationIdentifier = (props) => {
    const {
        className,
        dispatchLocationCoords,
        clearCurrentWeather
    } = props;

    const [locationName, dispatchLocationName] = useLocationName();
    const [isSearching, setIsSearching] = useState(false);

    const updateLocation = useUpdateLocation({
        dispatchLocationName,
        dispatchLocationCoords
    });

    const searchLocationByIP = useSearchLocationByIP({
        updateLocation,
        setIsSearching,
        clearCurrentWeather
    });

    const searchLocationByLocationName = useSearchLocationByLocationName({
        updateLocation,
        dispatchLocationCoords,
        clearCurrentWeather
    });

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