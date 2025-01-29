import cn from "classnames";
import styles from './CurrentWeather.module.scss';

export const CurrentWeather = ({ currentWeather }) => {
    const sign = currentWeather.main.temp > 0 ? '+' :
        currentWeather.main.temp < 0 ? '-' : '';
        
    return (
        <div className={cn(styles.CurrentWeather)}>
            <div className={cn(styles['CurrentWeather__top'])}> 
                <div className={cn(styles['CurrentWeather__temp'])}> 
                    { sign + Math.round(currentWeather.main.temp) }° 
                </div>
                <div className={cn(styles['CurrentWeather__description-wrapper'])}>
                    <div className={cn(styles['CurrentWeather__description'])}>
                        { currentWeather.weather.description }
                    </div>
                    <div className={cn(styles['CurrentWeather__feels-like'])}>
                        Feels like { Math.round(currentWeather.main.feelsLike) }°
                    </div>
                </div>
            </div>
            <div className={cn(styles['CurrentWeather__bottom'])}>
                <div>
                    Wind { currentWeather.wind.speed } k/m
                </div>
                <div>
                    Direction { currentWeather.wind.deg }
                </div>
                <div>
                    Humidity { currentWeather.main.humidity }%
                </div>
                <div>
                    { currentWeather.main.pressure } mmHg
                </div>
            </div>
        </div>
    )
}