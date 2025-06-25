import { useCallback, Dispatch, SetStateAction } from 'react';
import { getLocationByIP } from '@/features/SearchLocationByIP';
import { LocationData } from '@/features/SearchLocation';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
    updateLocation: (location: LocationData | null) => void,
    setIsSearching:  Dispatch<SetStateAction<boolean>>,
    setError: (error: Error | null) => void,
    IP: string | null
}

export const useSearchLocationByIP = (props: Props) => {
    const {
        updateLocation, 
        setIsSearching,
        setError,
        IP
    } = props;

    const queryClient = useQueryClient();

    return useCallback(() => {
        if (!IP) {
            return;
        }

        queryClient.fetchQuery({
            queryKey: [ 'location', {
                ip: IP
            } ],
            queryFn: () => {
                setIsSearching(true);
                return getLocationByIP(IP);
            },
            staleTime: 360000,
            gcTime: 360000,
        }).then(
            (location) => {
                setError(null);
                updateLocation(location);
            },
            (error) => {
                setError(error);
                updateLocation(null);
            }
        ).finally(
            () => {
                setIsSearching(false);
            }
        );
    }, [
        queryClient,
        updateLocation,
        setIsSearching,
        setError,
        IP
    ]);
};