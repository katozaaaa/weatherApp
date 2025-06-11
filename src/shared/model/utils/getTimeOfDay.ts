import { toUTCMilliseconds } from '@/shared';

export const getTimeOfDay = (weatherData) => {
    if (
        weatherData.dt * 1000 < weatherData.sys.sunrise * 1000 ||
        weatherData.dt * 1000 >= weatherData.sys.sunset * 1000
    ) {
        return 'night';
    }

    return 'day';
};