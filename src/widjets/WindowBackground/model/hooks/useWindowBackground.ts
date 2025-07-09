import { useMemo } from 'react';
import { getCloudsSlug, getTimeOfDay } from '@/shared';
import { CurrentWeatherData } from '@/entities/Weather';

export const useWindowBackground = (currentWeather: CurrentWeatherData) => {
    return useMemo(() => {
        return {
            fileName: [
                'window-background',
                getCloudsSlug(
                    currentWeather.weather[0].id,
                    currentWeather.clouds.all
                ),
                getTimeOfDay({
                    forecast: currentWeather.dt,
                    sunrise: currentWeather.sys.sunrise,
                    sunset: currentWeather.sys.sunset
                })
            ].join('_')
        };
    }, [ currentWeather ]);
};