import { useCallback, Dispatch } from 'react';
import { getLocationByLocationName } from '@/features/SearchLocation';
import { LocationData } from '@/features/SearchLocation';
import { LocationCoordsAction } from '../reducers/locationCoordsReducer';
import { useQueryClient } from '@tanstack/react-query';

interface Dispatchers {
    updateLocation: (location: LocationData) => void,
    dispatchLocationCoords: Dispatch<LocationCoordsAction>
    setErrors: (errors: Error[]) => void,
}

export const useSearchLocationByLocationName = (dispatchers: Dispatchers) => {
    const {
        updateLocation,
        dispatchLocationCoords,
        setErrors
    } = dispatchers;

    const queryClient = useQueryClient();

    return useCallback((locationName: string) => {
        setErrors([]);

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
            (error) => {
                setErrors([ error ]);
            }
        );
    }, [
        queryClient,
        updateLocation,
        dispatchLocationCoords,
        setErrors
    ]);
};