import { useCallback } from 'react';

export const useClearWeather = (dispatchWeather) => {
    const clearWeather = useCallback(() => {
        dispatchWeather({
            type: 'cleared'
        });
    }, []);

    return clearWeather;
};