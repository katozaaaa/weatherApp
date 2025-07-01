interface WeatherData {
    [index: string]: any
}

export const getCloudsSlug = (weatherData: WeatherData) => {
    if (
        weatherData.weather &&
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