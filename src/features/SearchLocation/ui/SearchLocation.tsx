import cn from "classnames";
import styles from './SearchLocation.module.scss';
import { getLocationByLocationName } from "../api/getLocationByLocationName";

export const SearchLocation = (props) => {
    const {
        locationName,
        dispatchLocationName,
        dispatchLocationCoords,
        isSearching,
        clearCurrentWeather
    } = props;

    const onInput = (e) => {
        dispatchLocationName({
            type: 'updated',
            locationName: e.currentTarget.value,
        });
    }

    const onEnter = async (e) => {
        if (e.keyCode === 13) {
            clearCurrentWeather();
            dispatchLocationCoords({
                type: 'cleared',
            });

            const locationCoords = await getLocationCoordsByLocationName(locationName);
            dispatchLocationCoords({
                type: 'updated',
                location: {
                    lat: locationCoords.lat,
                    lon: locationCoords.lon
                }
            })
        } 
    }

    return (
        <div 
            className={cn(
                styles.SearchLocation,
                isSearching && styles['SearchLocation--searching']
            )}
        >
            <input 
                type={'text'}
                value={locationName}
                placeholder='Enter a locality'
                onKeyUp={onEnter}
                onInput={onInput}
            />
            { isSearching && <span className={cn(styles['SearchLocation__searching-placeholder'])}></span> }
        </div>
        
    );
}