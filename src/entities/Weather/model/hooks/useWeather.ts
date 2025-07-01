import { Dispatch, SetStateAction } from 'react';
import { getWeather, LocationCoords } from '@/entities/Weather';
import { QueryClient, useQuery } from '@tanstack/react-query';

type SetErrors = Dispatch<SetStateAction<Error[]>>;

interface UseWeatherProps {
    queryClient: QueryClient,
    locationCoords: LocationCoords,
    setErrors: SetErrors
}

export const useWeather = (props: UseWeatherProps) => {
    const {
        queryClient,
        locationCoords,
        setErrors
    } = props;

    return useQuery({
        queryKey: [
            'weather',
            locationCoords
        ],
        queryFn: () => {
            return getWeather(locationCoords);
        },
        refetchInterval: 60000,
        staleTime: 60000,
        gcTime: 60000,
        throwOnError: (error) => {
            setErrors([ error ]);
            return false;
        }
    }, queryClient);
};