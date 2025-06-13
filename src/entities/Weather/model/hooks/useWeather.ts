import { useReducer, useEffect, useCallback } from 'react';
import { getWeather } from '../../api/getWeather';
import { weatherReducer } from '../reducers/weatherReducer';

export const useWeather = (locationCoords, setError) => {
    const [ weather, dispatchWeather ] = useReducer(
        weatherReducer, 
        { current: null }
    );

    const updateWeather = useCallback((expire) => {
        if (!locationCoords.lat && !locationCoords.lon) {
            return;
        }

        getWeather(locationCoords)
            .then(
                (weather) => {
                    if (!expire.current) {
                        if (weather) {
                            dispatchWeather({
                                type: 'updated',
                                weather: weather
                            });
                        } else {
                            dispatchWeather({
                                type: 'cleared'
                            });
                        }
                    }
                },
                (error) => {
                    if (!expire.current) {
                        dispatchWeather({
                            type: 'cleared'
                        });

                        setError(error);
                    }
                }
            );
    }, [ locationCoords, setError ]);

    useEffect(() => {
        const expire = { current: false };

        updateWeather(expire);
        const intervalID = setInterval(updateWeather, 60000, expire);

        return () => { 
            expire.current = true;
            clearInterval(intervalID); 
        };
    }, [ locationCoords, updateWeather ]);

    return [ weather.current, dispatchWeather ];
};