import { useState } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocation } from "@/features/SearchLocation";
import { FindLocationByIP } from '@/features/FindLocationByIP';

export const LocationIdentifier = ({ setLocationCoords }) => {
    const [locationName, setLocationName] = useState('');

    return (
        <div className={cn(styles.LocationIdentifier)}>
            <SearchLocation 
                locationName={locationName}
                setLocationName={setLocationName}
                setLocationCoords={setLocationCoords}
            />
            <FindLocationByIP 
                setLocationName={setLocationName}
                setLocationCoords={setLocationCoords}
            />
        </div>
    )
}