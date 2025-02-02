export const isThunderstorm = (weatherData) => {
    return String(weatherData.weather.id).startsWith('2');
}

export const isRain = (weatherData) => {
    return (
        String(weatherData.weather.id).startsWith('3') || 
        String(weatherData.weather.id).startsWith('5')
    );
}

export const isSnow = (weatherData) => {
    return String(weatherData.weather.id).startsWith('6');
}

export const isAtmosphere = (weatherData) => {
    return String(weatherData.weather.id).startsWith('7');
}

export const isClear = (weatherData) => {
    return (
        String(weatherData.weather.id).startsWith('8') &&
        weatherData.clouds.all <= 25
    );
}

export const isScatteredClouds = (weatherData) => {
    return !isClear(weatherData) && weatherData.clouds.all <= 50;
}

export const isOvercastClouds = (weatherData) => {
    return !isScatteredClouds(weatherData);
}

export const isNight = (weatherData) => {
    return (
        weatherData.now < weatherData.sys.sunrise * 1000 || 
        weatherData.now >= weatherData.sys.sunset * 1000
    );
}