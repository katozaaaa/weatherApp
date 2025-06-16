import cn from 'classnames';
import styles from './SearchLocation.module.scss';
import { Dispatch } from 'react';
import { LocationNameAction, LocationNameState } from '../model/reducers/locationNameReducer';

interface SearchLocationProps {
    locationName: LocationNameState,
    dispatchLocationName: Dispatch<LocationNameAction>,
    searchLocationByLocationName: (locationName: string) => void,
    isSearching: boolean
}

export const SearchLocation = (props: SearchLocationProps) => {
    const {
        locationName,
        dispatchLocationName,
        searchLocationByLocationName,
        isSearching
    } = props;

    const onInput = (e: any) => {
        dispatchLocationName({
            type: 'updated',
            locationName: e.currentTarget.value
        });
    };

    const onEnter = async (e: any) => {
        if (e.keyCode === 13 && locationName) {
            searchLocationByLocationName(locationName);
        } 
    };

    return (
        <div 
            className={ cn(
                styles.container,
                isSearching && styles.containerSearching
            ) }
        >
            <input 
                type={ 'text' }
                value={ locationName || '' }
                placeholder='Enter a locality'
                onKeyUp={ onEnter }
                onInput={ onInput }
            />
            { isSearching && <span className={ styles.searchingPlaceholder }></span> }
        </div>
    );
};