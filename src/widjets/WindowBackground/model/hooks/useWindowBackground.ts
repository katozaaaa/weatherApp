import { useMemo } from 'react';
import { getCloudsSlug, getTimeOfDay } from '@/shared';

export const useWindowBackground = (currentWeather) => {
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