import { useCallback, Dispatch } from 'react';
import { WeatherAction } from '../reducers/weatherReducer';

export const useClearWeather = (dispatchWeather: Dispatch<WeatherAction>) => {
    return useCallback(() => {
        dispatchWeather({
            type: 'cleared'
        });
    }, [ dispatchWeather ]);
};