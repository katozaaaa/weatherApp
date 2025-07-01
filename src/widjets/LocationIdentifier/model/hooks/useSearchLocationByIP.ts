import { useCallback, Dispatch, SetStateAction } from 'react';
import { getLocationByIP } from '@/features/SearchLocationByIP';
import { LocationData } from '@/features/SearchLocation';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
    updateLocation: (location: LocationData) => void,
    setIsSearching:  Dispatch<SetStateAction<boolean>>,
    setErrors: (errors: Error[]) => void,
    IP: {
        value?: string
    }
}

export const useSearchLocationByIP = (props: Props) => {
    const {
        updateLocation, 
        setIsSearching,
        setErrors,
        IP
    } = props;

    const queryClient = useQueryClient();

    return useCallback(() => {
        queryClient.fetchQuery({
            queryKey: [ 'location', {
                ip: IP
            } ],
            queryFn: () => {
                setIsSearching(true);
                return getLocationByIP(IP);
            },
            staleTime: 360000,
            gcTime: 360000
        }).then(
            (location) => {
                setErrors([]);
                updateLocation(location);
            },
            (error) => {
                setErrors([ error ]);
                updateLocation({ });
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
        setErrors,
        IP
    ]);
};