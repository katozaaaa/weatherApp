import cn from 'classnames';
import styles from './ForecastWeather.module.scss';
import {WeatherIcon} from "@/shared";

export const ForecastWeather = (props) => {
    const {
        className,
        forecastWeather,
    } = props;

    return (
        <div
            className={cn(
                styles.container,
                className
            )}
        >
            <ul className={styles.list}>
                {forecastWeather.list.map((weather) => {
                    const sign = weather.main.temp > 0 ? '+' : '';

                    return (
                        <li
                            className={styles.weather}
                            key={weather.dt}
                        >
                            <WeatherIcon
                                className={styles.weatherIcon}
                                weatherData={weather}
                            />
                            <div className={styles.temp}>
                                { sign + Math.round(weather.main.temp) }°
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};