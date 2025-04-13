import { getNow, toUTCMilliseconds } from '@/shared';

export const getTimeOfDay = (weatherData) => {
    const now = toUTCMilliseconds(getNow());

    if (
        now < weatherData.sys.sunrise * 1000 || 
        now >= weatherData.sys.sunset * 1000
    ) {
        return 'night';
    }

    return 'day';
}