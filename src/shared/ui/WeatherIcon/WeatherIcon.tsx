import cn from 'classnames';
import styles from './WeatherIcon.module.scss';
import { getWeatherIconSrc } from '@/shared';

interface WeatherIconProps {
    className?: string;
    weatherData: {
        [index: string]: any | undefined
    }
}

export const WeatherIcon = (props: WeatherIconProps) => {
    const {
        className,
        weatherData
    } = props;

    return (
        <>
            <img
                className={ cn(
                    styles.container,
                    className
                ) }
                src={ getWeatherIconSrc({
                    id: weatherData.weather[0].id,
                    cloudsPercentage: weatherData.clouds.all,
                    time: {
                        forecast: weatherData.dt,
                        sunrise: weatherData.sys.sunrise,
                        sunset: weatherData.sys.sunset
                    }
                }) }
            />
        </>
    );
};