import { useReducer, useEffect, useCallback, Dispatch, SetStateAction } from 'react';
import { getWeather, LocationCoords } from '../../api/getWeather';
import { weatherReducer } from '../reducers/weatherReducer';

type SetError = Dispatch<SetStateAction<Error | null>>;

export const useWeather = (locationCoords: LocationCoords, setError: SetError) => {
    const [ weather, dispatchWeather ] = useReducer(weatherReducer, { current: null });

    const updateWeather = useCallback((expire: { current: boolean }) => {
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

    return {
        weather: weather.current,
        dispatchWeather
    };
};