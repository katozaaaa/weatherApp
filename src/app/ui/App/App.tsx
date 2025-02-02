import cn from 'classnames';
import styles from './App.module.scss';
import { CurrentTime } from '@/widjets/CurrentTime';
import { LocationIdentifier } from '@/widjets/LocationIdentifier';
import { CurrentWeather, useCurrentWeather } from '@/widjets/CurrentWeather';
import { WindowBackground } from '@/widjets/WindowBackground/';
import { useLocationCoords } from '@/widjets/LocationIdentifier';
import { Loader } from '@/widjets/Loader';
// import { ForecastWeather } from '@/widjets/ForecastWeather';

import '@/shared/styles/index.scss';

export const App = () => {
    const [locationCoords, dispatchLocationCoords] = useLocationCoords();
    const [currentWeather, dispatchCurrentWeather] = useCurrentWeather(locationCoords);

    const clearCurrentWeather = () => {
        dispatchCurrentWeather({
            type: 'cleared'
        });
    };

    return (
        <main className={cn(styles.App)}>
            <div className={cn(styles['App__window'])}>
                <div className={cn(styles['App__main'])}>
                    <div className={cn(styles['App__header'])}>
                        { currentWeather &&
                            <CurrentTime timezone={currentWeather.timezone} />
                        }
                        <LocationIdentifier 
                            className={cn(styles['App__location-identifier'])}
                            dispatchLocationCoords={dispatchLocationCoords}
                            clearCurrentWeather={clearCurrentWeather}
                        />
                    </div>
                    <div className={cn(styles['App__body'])}>
                        { currentWeather && 
                            <CurrentWeather currentWeather={currentWeather}/>  
                        }
                    </div>
                </div>
                { currentWeather &&
                    <div className={cn(styles['App__footer'])}>

                    </div>
                }
                { currentWeather &&
                    <WindowBackground 
                        className={cn(styles['App__window-background'])}
                        weatherData={{
                            id: currentWeather.weather.id,
                            clouds: currentWeather.clouds.all,
                            timezone: currentWeather.timezone,
                            sunset: currentWeather.sys.sunset,
                            sunrise: currentWeather.sys.sunrise,
                        }}
                    />
                }
                { !currentWeather &&
                    <Loader className={cn(styles['App__loader'])}/>
                }
            </div>
        </main>
    );
};