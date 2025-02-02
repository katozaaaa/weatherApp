import cn from 'classnames';
import styles from './App.module.scss';
import { CurrentTime } from '@/widjets/CurrentTime';
import { LocationIdentifier } from '@/widjets/LocationIdentifier';
import { CurrentWeather, useCurrentWeather, useClearCurrentWeather } from '@/widjets/CurrentWeather';
import { WindowBackground } from '@/widjets/WindowBackground/';
import { useLocationCoords } from '@/widjets/LocationIdentifier';
import { Loader } from '@/widjets/Loader';
import { useBackgroundColor } from '../../model/hooks/useBackgroundColor';
// import { ForecastWeather } from '@/widjets/ForecastWeather';

import '@/shared/styles/index.scss'

export const App = () => {
    const [locationCoords, dispatchLocationCoords] = useLocationCoords();
    const [currentWeather, dispatchCurrentWeather] = useCurrentWeather(locationCoords);
    const clearCurrentWeather = useClearCurrentWeather(dispatchCurrentWeather);
    const backgroundColor = useBackgroundColor(currentWeather)

    return (
        <main 
            className={cn(styles.App)}
            style={{
                backgroundColor: backgroundColor,
            }}
        >
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
                        weatherData={currentWeather}
                    />
                }
                { !currentWeather &&
                    <Loader className={cn(styles['App__loader'])}/>
                }
            </div>
        </main>
    );
};