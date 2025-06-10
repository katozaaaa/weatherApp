import styles from './CurrentWeather.module.scss';
import { getWindDirection, WeatherIcon } from '@/shared';

export const CurrentWeather = ({ currentWeather }) => {
    const sign = currentWeather.main.temp > 0 ? '+' : '';
        
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.temp}>
                    { sign + Math.round(currentWeather.main.temp) }° 
                </div>
                <div className={styles.icon}>
                    <WeatherIcon weatherData={currentWeather}/>
                </div>
                <div className={styles.descriptionWrapper}>
                    <div className={styles.description}>
                        { currentWeather.weather[0].description }
                    </div>
                    <div className={styles.feelsLike}>
                        Feels like { Math.round(currentWeather.main.feels_like) }°
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <div>
                    Wind { currentWeather.wind.speed } k/m
                </div>
                <div>
                    Direction { getWindDirection(currentWeather.wind.deg) }
                </div>
                <div>
                    Humidity { currentWeather.main.humidity }%
                </div>
                <div>
                    { currentWeather.main.pressure } mmHg
                </div>
            </div>
        </div>
    );
};