import { toUTCMilliseconds } from "@/shared";

export const getWindowBackground = (weatherData) => {
    const windowBackground = {
        fileName: null,
    }

    let fileName = ['window-background'];

    if (weatherData.id !== 800 || weatherData.clouds > 25) {
        fileName.push(weatherData.clouds <= 50 ? 'half-cloud-sky' : 'cloud-sky');
    } else {
        fileName.push('clean-sky');
    }

    const now = toUTCMilliseconds(new Date());

    const isNight = now < weatherData.sunrise * 1000 || now >= weatherData.sunset * 1000;
    fileName.push(isNight ? 'night' : 'day');

    windowBackground.fileName = fileName.join('_');

    return windowBackground;
}