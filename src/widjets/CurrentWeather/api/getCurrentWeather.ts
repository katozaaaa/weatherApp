import { mockData } from "../model/data/mockData"

export const getCurrentWeather = (locationCoords) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const key = `lat=${locationCoords.lat}&lon=${locationCoords.lon}`
                if (mockData.hasOwnProperty(key)) {
                    resolve(mockData[key]);
                } else {
                    reject();
                }
            }, 1000)
        }).then(
            (currentWeather) => {
                return {
                    weather: {
                        id: currentWeather.weather[0].id,
                        description: currentWeather.weather[0].description,
                    },
                    main: {
                        temp: currentWeather.main.temp,
                        feelsLike: currentWeather.main['feels_like'],
                        pressure: currentWeather.main.pressure,
                        humidity: currentWeather.main.humidity,
                    },
                    wind: {
                        speed: currentWeather.wind.speed,
                        deg: currentWeather.wind.deg,
                    },
                    clouds: currentWeather.clouds,
                    sys: {
                        sunrise: currentWeather.sys.sunrise,
                        sunset: currentWeather.sys.sunset,
                    },
                    timezone: currentWeather.timezone,
                }
            },
            () => {
                return null;
            }
        )
    }
}