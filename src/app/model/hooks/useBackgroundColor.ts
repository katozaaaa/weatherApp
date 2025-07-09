import { useMemo } from 'react';
import { getCloudsSlug, getTimeOfDay } from '@/shared';
import { colors } from '../data/colors';
import { CurrentWeatherData } from '@/entities/Weather';

export const useBackgroundColor = (currentWeather: CurrentWeatherData) => {
    return useMemo(() => {
        try {
            const cloudsSlug = getCloudsSlug(
                currentWeather.weather[0].id,
                currentWeather.clouds.all
            );

            const timeOfDay = getTimeOfDay({
                forecast: currentWeather.dt,
                sunrise: currentWeather.sys.sunrise,
                sunset: currentWeather.sys.sunset
            });

            return colors[cloudsSlug][timeOfDay];
        } catch {
            return colors.default;
        }
    }, [ currentWeather ]);
};