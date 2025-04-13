import cn from 'classnames';
import styles from './App.module.scss';
import { CurrentTime } from '@/widjets/CurrentTime';
import { LocationIdentifier } from '@/widjets/LocationIdentifier';
import { useWeather, useClearWeather } from '@/entities/Weather';
import { CurrentWeather } from '@/widjets/CurrentWeather';
import { ForecastWeather } from '@/widjets/ForecastWeather';
import { WindowBackground } from '@/widjets/WindowBackground/';
import { useLocationCoords } from '@/widjets/LocationIdentifier';
import { Loader } from '@/widjets/Loader';
import { useBackgroundColor } from '../../model/hooks/useBackgroundColor';

import '@/shared/styles/index.scss';

export const App = () => {
    const [locationCoords, dispatchLocationCoords] = useLocationCoords();
    const [weather, dispatchWeather] = useWeather(locationCoords);
    const clearWeather = useClearWeather(dispatchWeather);
    const backgroundColor = useBackgroundColor(weather ? weather.current : null);

    return (
        <main 
            className={cn(styles.App)}
            style={{
                backgroundColor: backgroundColor
            }}
        >
            <div className={cn(styles['App__window'])}>
                <div className={cn(styles['App__main'])}>
                    <div className={cn(styles['App__header'])}>
                        { weather &&
                            <CurrentTime timezone={weather.current.timezone} />
                        }
                        <LocationIdentifier 
                            className={cn(styles['App__location-identifier'])}
                            dispatchLocationCoords={dispatchLocationCoords}
                            clearWeather={clearWeather}
                        />
                    </div>
                    <div className={cn(styles['App__body'])}>
                        { weather && 
                            <CurrentWeather currentWeather={weather.current}/>  
                        }
                    </div>
                </div>
                { weather &&
                    <div className={cn(styles['App__footer'])}>

                    </div>
                }
                { weather &&
                    <WindowBackground 
                        className={cn(styles['App__window-background'])}
                        currentWeather={weather.current}
                    />
                }
                { !weather &&
                    <Loader className={cn(styles['App__loader'])}/>
                }
            </div>
        </main>
    );
};