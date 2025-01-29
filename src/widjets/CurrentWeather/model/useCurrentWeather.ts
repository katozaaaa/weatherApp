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
        const timeoutID = setTimeout(async () => {
            const currentWeather = await getCurrentWeather(locationCoords);
            setCurrentWeather(currentWeather);
        })
        
        const intervalID = setInterval(async () => {
            const currentWeather = await getCurrentWeather(locationCoords);
            setCurrentWeather(currentWeather);
        }, 60000);

        return () => { 
            clearTimeout(timeoutID);
            clearInterval(intervalID); 
        };
    }, [locationCoords]);

    return [currentWeather, setCurrentWeather];
}