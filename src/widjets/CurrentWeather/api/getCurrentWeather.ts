export const getCurrentWeather = (locationCoords) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                weather: {
                    id: 0,
                    description: 'Partly Cloudy',
                },
                main: {
                    temp: 17,
                    feelsLike: 10,
                    pressure: 1024,
                    humidity: 67,
                },
                wind: {
                    speed: 4.09,
                    deg: 121,
                },
                clouds: 76,
                sys: {
                    sunrise: 1726636384,
                    sunset: 1726680975,
                },
                timezone: 7200,
            })
        }, 1000)
    });
}