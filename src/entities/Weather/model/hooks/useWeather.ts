import { Dispatch, SetStateAction } from 'react';
import { getWeather, LocationCoords } from '@/entities/Weather';
import { QueryClient, useQuery } from '@tanstack/react-query';

type SetError = Dispatch<SetStateAction<Error | null>>;

interface UseWeatherProps {
    queryClient: QueryClient,
    locationCoords: LocationCoords,
    setError: SetError
}

export const useWeather = (props: UseWeatherProps) => {
    const {
        queryClient,
        locationCoords,
        setError
    } = props;

    return useQuery({
        queryKey: [
            'weather',
            locationCoords
        ],
        queryFn: () => {
            if (!locationCoords.lat || !locationCoords.lon) {
                return null;
            }

            return getWeather(locationCoords);
        },
        refetchInterval: 60000,
        staleTime: 60000,
        gcTime: 60000,
        throwOnError: (error) => {
            setError(error);
            return false;
        }
    }, queryClient);
};