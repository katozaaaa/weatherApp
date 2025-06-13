import { useCallback } from 'react';

export const useClearWeather = (dispatchWeather) => {
    return useCallback(() => {
        dispatchWeather({
            type: 'cleared'
        });
    }, []);
};