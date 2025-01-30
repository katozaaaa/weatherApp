import { getLocationByLocationName } from '../api/getLocationByLocationName';

export const getSearchLocationByLocationName = (onStartSearching, onFullfilledSearching) => {
    return async () => {
        onStartSearching();
        getLocationByLocationName(locationName).then(onFullfilledSearching);
    }
}