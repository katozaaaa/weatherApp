import { mockData } from '../model/data/mockData';

export interface CurrentWeatherData {
    [index: string]: any
}

export type ForecastWeatherData = CurrentWeatherData;

export interface WeatherData {
    current: CurrentWeatherData,
    forecast: ForecastWeatherData
}

export interface LocationCoords {
    lat: number | null
    lon: number | null
}

type GetWeather = (locationCoords: LocationCoords) => Promise<WeatherData>;

export const getWeather: GetWeather = (locationCoords) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    const key = `lat=${locationCoords.lat}&lon=${locationCoords.lon}`;

                    if (Object.prototype.hasOwnProperty.call(mockData, key)) {
                        resolve(mockData[key]);
                    } else {
                        reject(new Error('Failed to fetch weather data'));
                    }
                }, 1000);
            }
        );
    } else {
        return new Promise(
            (resolve) => {
                resolve({} as WeatherData);
            }
        );
    }
};