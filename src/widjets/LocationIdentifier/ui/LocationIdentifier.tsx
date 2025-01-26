import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocation } from "@/features/SearchLocation";
import { FindLocationByIP, getIP, getLocationByIP } from '@/features/FindLocationByIP';

export const LocationIdentifier = ({ setLocationCoords }) => {
    const [locationName, setLocationName] = useState('');
    const requestID = useRef(0);

    const findLocationByIP = async () => {
        requestID.current++;
        const currentRequestID = requestID.current;

        const ip = await getIP();
        const location = await getLocationByIP(ip);

        if (requestID.current === currentRequestID) {
            setLocationName([location['city'], location['country_name']].join(', '));
    
            setLocationCoords({
                lat: location.latitude,
                lon: location.longitude,
            });
        }
    }

    useEffect(() => {
        findLocationByIP();
    }, []);

    return (
        <div className={cn(styles.LocationIdentifier)}>
            <SearchLocation 
                locationName={locationName}
                setLocationName={setLocationName}
                setLocationCoords={setLocationCoords}
            />
            <FindLocationByIP 
                findLocationByIP={findLocationByIP}
            />
        </div>
    )
}