import { getCloudsSlug, getTimeOfDay, getWeatherSlug } from '@/shared';

interface WeatherData {
    [index: string]: any
}

export const getWeatherIconSrc = (weatherData: WeatherData) => {
    const cloudsSlug = getCloudsSlug(weatherData);
    const weatherSlug = getWeatherSlug(weatherData);
    const timeOfDay = getTimeOfDay(weatherData);

    let slugs: string[] = [];

    if (weatherSlug === 'clear') {
        slugs = [ 'no-clouds', timeOfDay ];
    } else if (weatherSlug !== 'thunderstorm' && weatherSlug !== 'atmosphere') {
        if (cloudsSlug !== 'overcast-clouds') {
            slugs = [ 'scattered-clouds', timeOfDay ];
        } else {
            slugs = [ cloudsSlug ];
        }
    }

    const fileNameArray = [ 'weather-icon', weatherSlug, ...slugs ];

    return `./images/${fileNameArray.join('_')}.svg`;
};