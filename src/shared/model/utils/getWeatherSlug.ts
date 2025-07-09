export const getWeatherSlug = (weatherId: number) => {
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