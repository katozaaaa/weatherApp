import cn from 'classnames';
import styles from './WeatherIcon.module.scss';
import { getCloudsSlug, getWeatherSlug, getTimeOfDay } from '@/shared';

export const WeatherIcon = (props) => {
    const {
        weatherData
    } = props;

    const cloudsSlug = getCloudsSlug(weatherData);
    const weatherSlug = getWeatherSlug(weatherData);
    const timeOfDay = getTimeOfDay(weatherData);

    let slugs = [];

    if (weatherSlug === 'clear') {
        slugs = ['no-clouds', timeOfDay];
    } else if (weatherSlug !== 'thunderstorm' && weatherSlug !== 'atmosphere') {
        if (cloudsSlug !== 'overcast-clouds') {
            slugs = ['scattered-clouds', timeOfDay];
        } else {
            slugs = [cloudsSlug];
        }
    }

    let fileNameArray = ['weather-icon', weatherSlug, ...slugs];

    return (
        <>
            <img src={`./images/${fileNameArray.join('_')}.svg`} ></img>
        </>
    );
}