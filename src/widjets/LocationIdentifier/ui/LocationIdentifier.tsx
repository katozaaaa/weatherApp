import { useState, useEffect, Dispatch } from 'react';
import cn from 'classnames';
import styles from './LocationIdentifier.module.scss';
import { SearchLocationByIP } from '@/features/SearchLocationByIP';
import { SearchLocation, useLocationName } from '@/features/SearchLocation';
import { useUpdateLocation } from '../model/hooks/useUpdateLocation';
import { useSearchLocationByIP } from '../model/hooks/useSearchLocationByIP';
import { useSearchLocationByLocationName } from '../model/hooks/useSearchLocationByLocationName';
import { LocationCoordsAction } from '../model/reducers/locationCoordsReducer';

interface LocationIdentifierProps {
    className?: string,
    dispatchLocationCoords: Dispatch<LocationCoordsAction>,
    setErrors: (error: Error[]) => void,
    IP: {
        value?: string
    }
}

export const LocationIdentifier = (props: LocationIdentifierProps) => {
    const {
        className,
        dispatchLocationCoords,
        setErrors,
        IP
    } = props;

    const [ locationName, dispatchLocationName ] = useLocationName();
    const [ isSearching, setIsSearching ] = useState(false);

    const updateLocation = useUpdateLocation({
        dispatchLocationName,
        dispatchLocationCoords
    });

    const searchLocationByIP = useSearchLocationByIP({
        updateLocation,
        setIsSearching,
        setErrors,
        IP
    });

    const searchLocationByLocationName = useSearchLocationByLocationName({
        updateLocation,
        dispatchLocationCoords,
        setErrors
    });

    useEffect(() => {
        searchLocationByIP();
    }, [ searchLocationByIP ]);

    return (
        <div className={ cn(styles.container, className) }>
            <SearchLocation 
                locationName={ locationName }
                dispatchLocationName={ dispatchLocationName }
                searchLocationByLocationName={ searchLocationByLocationName }
                isSearching={ isSearching }
            />
            { IP.value && (
                <SearchLocationByIP
                    searchLocationByIP={ searchLocationByIP }
                    isSearching={ isSearching }
                />
            )}
        </div>
    );
};