import { useCallback, Dispatch } from 'react';
import { getLocationByLocationName } from '@/features/SearchLocation';
import { LocationData } from '@/features/SearchLocation';
import { LocationCoordsAction } from '../reducers/locationCoordsReducer';
import { useQueryClient } from '@tanstack/react-query';

interface Dispatchers {
    updateLocation: (location: LocationData | null) => void,
    dispatchLocationCoords: Dispatch<LocationCoordsAction>
    setError: (error: Error | null) => void,
}

export const useSearchLocationByLocationName = (dispatchers: Dispatchers) => {
    const {
        updateLocation,
        dispatchLocationCoords,
        setError
    } = dispatchers;

    const queryClient = useQueryClient();

    return useCallback((locationName: string) => {
        setError(null);

        queryClient.fetchQuery({
            queryKey: [ 'location', {
                locationName: locationName
            } ],
            queryFn: () => {
                dispatchLocationCoords({
                    type: 'cleared'
                });

                return getLocationByLocationName(locationName);
            },
            staleTime: 360000,
            gcTime: 360000
        }).then(
            updateLocation,
            setError
        );
    }, [
        queryClient,
        updateLocation,
        dispatchLocationCoords,
        setError
    ]);
};