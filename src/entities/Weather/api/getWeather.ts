import { mockData } from '../model/data/mockData';

export const getWeather = (locationCoords) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const key = `lat=${locationCoords.lat}&lon=${locationCoords.lon}`;

                if (mockData.hasOwnProperty(key)) {
                    resolve(mockData[key]);
                } else {
                    reject(new Error('Failed to fetch weather data'));
                }
            }, 1000);
        });
    }
};