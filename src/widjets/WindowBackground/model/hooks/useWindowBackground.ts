import { useMemo } from 'react';
import { getCloudsSlug, getTimeOfDay } from '@/shared';
import { CurrentWeatherData } from '@/entities/Weather';

export const useWindowBackground = (currentWeather: CurrentWeatherData) => {
    return useMemo(() => {
        return {
            fileName: [
                'window-background',
                getCloudsSlug(currentWeather),
                getTimeOfDay(currentWeather)
            ].join('_')
        };
    }, [ currentWeather ]);
};