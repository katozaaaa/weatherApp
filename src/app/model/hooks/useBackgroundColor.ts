import { useMemo } from 'react';
import { 
    isClear, 
    isScatteredClouds, 
    isNight,
    toUTCMilliseconds,
    getNow,
} from '@/shared';

export const useBackgroundColor = (weatherData) => {
    const backgroundColor = useMemo(() => {
        if (!weatherData) {
            return '#23324F';
        }

        let backgroundColor = '';

        const now = toUTCMilliseconds(getNow());
        const weatherDataWithTime = Object.assign({ now: now }, weatherData);

        if (isClear(weatherData)) {
            if (isNight(weatherDataWithTime)) {
                backgroundColor = '#1C2739';
            } else {
                backgroundColor = '#23324F';
            }
        } else if (isScatteredClouds(weatherData)) {
            if (isNight(weatherDataWithTime)) {
                backgroundColor = '#1A212F';
            } else {
                backgroundColor = '#1F2D41';
            }
        } else {
            if (isNight(weatherDataWithTime)) {
                backgroundColor = '#1C232F';
            } else {
                backgroundColor = '#222C38';
            }
        }

        return backgroundColor;
    }, [weatherData]);

    return backgroundColor;
};