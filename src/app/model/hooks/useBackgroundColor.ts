import { useMemo } from 'react';
import { getCloudsSlug, getTimeOfDay } from '@/shared';
import { colors } from '../data/colors';
import { CurrentWeatherData } from '@/entities/Weather';

export const useBackgroundColor = (currentWeather: CurrentWeatherData | null) => {
    return useMemo(() => {
        if (!currentWeather) {
            return colors.default;
        }

        const cloudsSlug = getCloudsSlug(currentWeather);
        const timeOfDay = getTimeOfDay(currentWeather);

        return colors[cloudsSlug][timeOfDay];
    }, [ currentWeather ]);
};