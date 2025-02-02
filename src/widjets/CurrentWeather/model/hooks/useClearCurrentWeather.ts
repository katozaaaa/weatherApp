import { useCallback } from "react";

export const useClearCurrentWeather = (dispatchCurrentWeather) => {
    const clearCurrentWeather = useCallback(() => {
        dispatchCurrentWeather({
            type: 'cleared'
        });
    }, []);

    return clearCurrentWeather;
}