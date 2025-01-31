export const getWindowBackground = (weatherData) => {
    const windowBackground = {
        fileName: null,
    }

    let fileName = ['window-background'];

    if (weatherData.id !== 800 && weatherData.clouds > 25) {
        fileName.push(weatherData.clouds <= 50 ? 'half-cloud-sky' : 'cloud-sky');
    } else {
        fileName.push('clean-sky');
    }

    const now = new Date(Date.now() + weatherData.timezone);
    fileName.push(now < weatherData.sunrize || now >= weatherData.sunset ? 'night' : 'day');

    windowBackground.fileName = fileName.join('_');

    return windowBackground;
}