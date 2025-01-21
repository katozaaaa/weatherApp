import { useState, useEffect } from 'react';

export const useCurrentWeather = (location) => {
    const [currentWeather, setCurrentWeather] = useState(null);

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