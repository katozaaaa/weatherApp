import cn from 'classnames';
import styles from './WeatherIcon.module.scss';
import { toUTCMilliseconds, getNow, isNight } from '@/shared';

export const WeatherIcon = (props) => {
    const {
        weatherData
    } = props;

    const weatherId = weatherData.weather.id;
    const cloudsSlug = weatherData.clouds.all < 50 ? 10 : 50;

    let timeOfDay = '';
    const now = toUTCMilliseconds(getNow());

    if (isNight(Object.assign({ now: now }, weatherData))) {
        timeOfDay = 'night';
    } else {
        timeOfDay = 'day';
    }

    let fileNameArray = ['weather-icon'];

    if (weatherId === 800) {
        fileNameArray.push(timeOfDay);
    } else if (weatherId >= 800) {
        if (cloudsSlug === 10) {
            fileNameArray.push('clouds', cloudsSlug, timeOfDay);
        } else {
            fileNameArray.push('clouds', cloudsSlug);
        }
    } else if (weatherId >= 700) {
        fileNameArray.push('fog');
    } else if (weatherId >= 600) {
        if (cloudsSlug === 10) {
            fileNameArray.push('snow', cloudsSlug, timeOfDay);
        } else {
            fileNameArray.push('snow', cloudsSlug);
        }
    } else if (weatherId >= 300) {
        if (cloudsSlug === 10) {
            fileNameArray.push('rain', cloudsSlug, timeOfDay);
        } else {
            fileNameArray.push('rain', cloudsSlug);
        }
    } else {
        fileNameArray.push('thunderstorm');
    }

    return (
        <>
            <img src={`./images/${fileNameArray.join('-')}.svg`} ></img>
        </>
    );
}