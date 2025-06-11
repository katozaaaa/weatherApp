export const getWeatherSlug = (weatherData) => {
    const weatherId = weatherData.weather[0].id;

    if (weatherId === 800) {
        return 'clear';
    } else if (weatherId > 800) {
        return 'clouds';
    } else if (weatherId >= 700) {
        return 'atmosphere';
    } else if (weatherId >= 600) {
        return 'snow';
    } else if (weatherId >= 300) {
        return 'rain';
    } else {
        return 'thunderstorm';
    }
};