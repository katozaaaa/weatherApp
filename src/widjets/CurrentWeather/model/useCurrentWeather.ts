import { useState, useEffect } from 'react';
import { getCurrentWeather } from '../api/getCurrentWeather';

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

export const useCurrentWeather = (locationCoords) => {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherStateOrNull>(null);

    useEffect(() => {
        setTimeout(async () => {
            const currentWeather = await getCurrentWeather(locationCoords);
            setCurrentWeather(currentWeather);
        })
        
        const timerID = setInterval(async () => {
            const currentWeather = await getCurrentWeather(locationCoords);
            console.log(currentWeather);
            setCurrentWeather(currentWeather);
        }, 60000);

        return () => { clearInterval(timerID) };
    }, [locationCoords]);

    return currentWeather;
}