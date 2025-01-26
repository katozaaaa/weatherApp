import { useState, useEffect } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocation } from "@/features/SearchLocation";
import { FindLocationByIP } from '@/features/FindLocationByIP';
import { getFindLocationAndIP } from '../model/getFindLocationAndIP';

export const LocationIdentifier = (props) => {
    const {
        className,
        setLocationCoords,
    } = props;

    const [locationName, setLocationName] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const findLocationAndIP = getFindLocationAndIP({
        setIsSearching,
        setLocationName,
        setLocationCoords,
    });

    useEffect(() => {
        findLocationAndIP();
    }, []);

    return (
        <div className={cn(styles.LocationIdentifier, className)}>
            <SearchLocation 
                locationName={locationName}
                setLocationName={setLocationName}
                setLocationCoords={setLocationCoords}
                isSearching={isSearching}
            />
            <FindLocationByIP 
                findLocationAndIP={findLocationAndIP}
                isSearching={isSearching}
            />
        </div>
    )
}