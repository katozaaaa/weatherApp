import { client } from '@/shared';

export type CurrentWeatherData = {
    [index: string]: any | undefined
};

export type ForecastWeatherData = CurrentWeatherData;

export interface WeatherData {
    current?: CurrentWeatherData,
    forecast?: ForecastWeatherData
}

export interface LocationCoords {
    lat?: number
    lon?: number
}

type GetWeather = (locationCoords: LocationCoords) => Promise<WeatherData>;

export const getWeather: GetWeather = async (locationCoords) => {
    if (!locationCoords.lat && !locationCoords.lon) {
        return {};
    }

    return client.get(
        'weather',
        {
            params: {
                ...locationCoords
            }
        }
    );
};