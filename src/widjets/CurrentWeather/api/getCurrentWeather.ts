export const getCurrentWeather = (locationCoords) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (locationCoords.lat === 37.386 && locationCoords.lon === -122.0838) {
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
                } else {
                    reject('There is no weather data for this location.')
                }
            }, 1000)
        });
    }
}