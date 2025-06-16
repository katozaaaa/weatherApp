import { useCallback, Dispatch } from 'react';
import { getLocationByLocationName } from '@/features/SearchLocation';
import { LocationData } from '@/features/SearchLocation';
import { LocationCoordsAction } from '../reducers/locationCoordsReducer';

interface Dispatchers {
    updateLocation: (location: LocationData | null) => void,
    dispatchLocationCoords: Dispatch<LocationCoordsAction>
    clearWeather: () => void,
    setError: (error: Error | null) => void,
}

export const useSearchLocationByLocationName = (dispatchers: Dispatchers) => {
    const {
        updateLocation,
        dispatchLocationCoords,
        clearWeather,
        setError
    } = dispatchers;

    return useCallback((locationName: string) => {
        setError(null);
        clearWeather();

        dispatchLocationCoords({
            type: 'cleared'
        });

        getLocationByLocationName(locationName)
            .then(
                updateLocation,
                setError
            );
    }, []);
};