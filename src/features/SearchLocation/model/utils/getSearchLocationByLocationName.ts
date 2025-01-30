import { getLocationByLocationName } from '../../api/getLocationByLocationName';

export const getSearchLocationByLocationName = (onStartSearching, onFullfilledSearching) => {
    return async (locationName) => {
        onStartSearching();
        getLocationByLocationName(locationName).then(onFullfilledSearching);
    };
};