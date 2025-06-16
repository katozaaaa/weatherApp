export const getCloudsSlug = (weatherData: { [index: string]: any }) => {
    if (
        weatherData.weather[0].id === 800 &&
        weatherData.clouds.all <= 25
    ) {
        return 'no-clouds';
    } else if (weatherData.clouds.all <= 50) {
        return 'scattered-clouds';
    } else {
        return 'overcast-clouds';
    }
};