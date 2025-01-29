import cn from "classnames";
import styles from './SearchLocation.module.scss';
import { getLocationCoordsByLocationName } from "../api/getLocationCoordsByLocationName";

export const SearchLocation = (props) => {
    const {
        locationName,
        setLocationName,
        setLocationCoords,
        isSearching,
    } = props;

    const onInput = (e) => {
        setLocationName(e.currentTarget.value);
    }

    const onEnter = async (e) => {
        if (e.keyCode === 13) {
            const locationCoords = await getLocationCoordsByLocationName(locationName);
            setLocationCoords(locationCoords);
        } 
    }

    return (
        <input 
            className={cn(styles.SearchLocation)}
            type={'text'}
            value={locationName}
            placeholder='Enter a locality'
            onKeyUp={onEnter}
            onInput={onInput}
            disabled={isSearching}
        />
    );
}