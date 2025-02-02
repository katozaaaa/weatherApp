import { useMemo } from 'react';
import { toUTCMilliseconds } from '@/shared';
import { isClear, isScatteredClouds, isNight } from '@/shared';

export const useWindowBackground = (weatherData) => {
    const windowBackground = useMemo(() => {
        const windowBackground = {
            fileName: null
        };
    
        let weather = '';

        console.log(weatherData.weather.id, weatherData.clouds.all);
    
        if (!isClear(weatherData)) {
            if (isScatteredClouds(weatherData)) {
                weather = 'half-cloud-sky';
            } else {
                weather = 'cloud-sky';
            }
        } else {
            weather = 'clean-sky';
        }
        
        let timeOfDay = '';
        const now = toUTCMilliseconds(new Date());

        if (isNight(Object.assign({ now: now }, weatherData))) {
            timeOfDay = 'night';
        } else {
            timeOfDay = 'day';
        }
    
        windowBackground.fileName = [
            'window-background',
            weather,
            timeOfDay
        ].join('_');

        return windowBackground;
    }, [weatherData]);

    return windowBackground;
};