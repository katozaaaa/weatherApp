import cn from 'classnames';
import styles from './WeatherIcon.module.scss';
import { getCloudsSlug, getWeatherSlug, getTimeOfDay } from '@/shared';
import { CurrentWeatherData } from '@/entities/Weather';

interface WeatherIconProps {
    className?: string;
    weatherData: CurrentWeatherData
}

export const WeatherIcon = (props: WeatherIconProps) => {
    const {
        className,
        weatherData
    } = props;

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

    return (
        <>
            <img
                className={ cn(
                    styles.container,
                    className
                ) }
                src={ `./images/${fileNameArray.join('_')}.svg` }
            />
        </>
    );
};