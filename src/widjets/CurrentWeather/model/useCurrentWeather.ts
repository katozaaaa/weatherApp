import { useState, useEffect } from 'react';

interface CurrentWeatherState {
    weather: {
        id: number,
        description: string,
    },
    main: {
        temp: number,
        feelsLike: number,
        pressure: number,
        humidity: number,
    },
    wind: {
        speed: number,
        deg: number,
    },
    clouds: number,
    sys: {
        sunrise: number,
        sunset: number,
    },
    timezone: number,
}

type CurrentWeatherStateOrNull = CurrentWeatherState | null;

export const useCurrentWeather = (location) => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherStateOrNull>(null);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setCurrentWeather({
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
        }, 1000);

        return () => { clearTimeout(timerID) };
    }, [location]);

    return [currentWeather, setCurrentWeather];
}