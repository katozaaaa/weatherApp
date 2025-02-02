import { useReducer, useEffect, useCallback } from 'react';
import { getCurrentWeather } from '../../api/getCurrentWeather';
import { currentWeatherReducer } from '../reducers/currentWeatherReducer';

export const useCurrentWeather = (locationCoords) => {
    const [currentWeather, dispatchCurrentWeather] = useReducer(
        currentWeatherReducer, 
        { current: null }
    );

    const updateCurrentWeather = useCallback((expire) => {
        getCurrentWeather(locationCoords).then((currentWeather) => {
            if (!expire.current) {
                if (currentWeather) {
                    dispatchCurrentWeather({
                        type: 'updated',
                        currentWeather: currentWeather
                    });
                } else {
                    dispatchCurrentWeather({
                        type: 'cleared'
                    });
                }
            }  
        });
    }, [locationCoords]);

    useEffect(() => {
        const expire = { current: false };

        updateCurrentWeather(expire);
        const intervalID = setInterval(updateCurrentWeather, 60000, expire);

        return () => { 
            expire.current = true;
            clearInterval(intervalID); 
        };
    }, [locationCoords]);

    return [currentWeather.current, dispatchCurrentWeather];
};