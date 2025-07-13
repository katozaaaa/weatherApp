import { getCloudsSlug, getTimeOfDay, getWeatherSlug } from '@/shared';

interface WeatherData {
    id: number,
    cloudsPercentage: number,
    time: {
        forecast: number,
        sunrise: number,
        sunset: number,
    }
}

export const getWeatherIconSrc = (weatherData: WeatherData) => {
    const cloudsSlug = getCloudsSlug(
        weatherData.id,
        weatherData.cloudsPercentage
    );

    const timeOfDay = getTimeOfDay(weatherData.time);
    const weatherSlug = getWeatherSlug(weatherData.id);

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