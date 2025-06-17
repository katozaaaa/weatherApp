import { client } from '@/shared/api/client.ts';

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
            if (result.status === 200) {
                return result.data;
            }
        }
    );
};