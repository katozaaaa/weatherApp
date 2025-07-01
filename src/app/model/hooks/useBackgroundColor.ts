import { useMemo } from 'react';
import { getCloudsSlug, getTimeOfDay } from '@/shared';
import { colors } from '../data/colors';
import { CurrentWeatherData } from '@/entities/Weather';

export const useBackgroundColor = (currentWeather: CurrentWeatherData) => {
    return useMemo(() => {
        try {
            const cloudsSlug = getCloudsSlug(currentWeather);
            const timeOfDay = getTimeOfDay(currentWeather);

            return colors[cloudsSlug][timeOfDay];
        } catch {
            return colors.default;
        }
    }, [ currentWeather ]);
};