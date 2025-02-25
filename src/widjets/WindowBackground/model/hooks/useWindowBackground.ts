import { useMemo } from 'react';
import {
    getNow, 
    toUTCMilliseconds, 
    isClear, 
    isScatteredClouds, 
    isNight 
} from '@/shared';

export const useWindowBackground = (weatherData) => {
    const windowBackground = useMemo(() => {
        const windowBackground = {
            fileName: null
        };
    
        let weather = '';
    
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
        const now = toUTCMilliseconds(getNow());

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