import { client } from '@/shared';

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

export const getWeather: GetWeather = async (locationCoords) => {
    return client.get(
        'weather',
        {
            params: {
                ...locationCoords
            }
        }
    ).then(
        (result) => {
            return result.data;
        },
        (error) => {
            throw new Error(error.response.data.error);
        }
    );
};