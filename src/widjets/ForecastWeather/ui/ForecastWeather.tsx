import cn from 'classnames';
import styles from './ForecastWeather.module.scss';
import { getTimeString, toLocaleDate, WeatherIcon } from '@/shared';
import { ForecastWeatherData } from '@/entities/Weather';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';

interface ForecastWeatherProps {
    className?: string;
    forecastWeather: ForecastWeatherData
}

export const ForecastWeather = (props: ForecastWeatherProps) => {
    const {
        className,
        forecastWeather
    } = props;

    const sys = {
        sunrise: forecastWeather.city?.sunrise,
        sunset: forecastWeather.city?.sunset
    };

    return (
        <div
            className={ cn(
                styles.container,
                className
            ) }
        >
            <Swiper
                className={ styles.slider }
                modules={ [
                    Scrollbar,
                    FreeMode
                ] }
                freeMode={ {
                    enabled: true,
                    sticky: false,
                    momentumBounceRatio: 0,
                    momentumRatio: 0.5,
                    momentumVelocityRatio: 0.5
                } }
                slidesPerView={ 12 }
                grabCursor={ true }
                autoHeight={ true }
                resistanceRatio={ 0 }
                scrollbar={ {
                    hide: false,
                    draggable: true,
                    dragSize: 200
                } }
                wrapperTag={ 'ul' }
            >
                {
                    forecastWeather.list.reduce((acc: any, weather: any, index: number) => {
                        const localeDate = toLocaleDate(
                            new Date(weather.dt * 1000),
                            forecastWeather.city.timezone
                        );

                        if (localeDate.getHours() < 3 && index !== 0) {
                            acc.push(
                                localeDate
                                    .toLocaleTimeString('en-EN', { weekday: 'long' })
                                    .split(' ')[0]
                            );

                            sys.sunrise += 86400;
                            sys.sunset += 86400;
                        }

                        acc.push({
                            ...weather,
                            sys: {
                                ...sys
                            }
                        });

                        return acc;
                    }, []).map((item: any, index: number) => {
                        return (
                            <SwiperSlide
                                className={ styles.slide }
                                key={ index }
                                tag={ 'li' }
                            >
                                { typeof(item) === 'string' ? (
                                    <div className={ styles.dayBeginning }>
                                        { item }
                                    </div>
                                ) : (
                                    <div className={ styles.weather }>
                                        <div className={ styles.time }>
                                            {
                                                getTimeString(
                                                    toLocaleDate(
                                                        new Date(item.dt * 1000),
                                                        forecastWeather.city.timezone
                                                    )
                                                )
                                            }
                                        </div>
                                        <div className={ styles.weatherIcon }>
                                            <WeatherIcon weatherData={ item } />
                                        </div>
                                        <div className={ styles.temp }>
                                            {
                                                (item.main.temp > 0 ? '+' : '')
                                                + Math.round(item.main.temp)
                                                + '°'
                                            }
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
};