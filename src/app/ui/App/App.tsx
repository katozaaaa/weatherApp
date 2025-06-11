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
    const [ locationCoords, dispatchLocationCoords ] = useLocationCoords();
    const [ weather, dispatchWeather ] = useWeather(locationCoords);
    const clearWeather = useClearWeather(dispatchWeather);
    const backgroundColor = useBackgroundColor(weather ? weather.current : null);

    return (
        <main 
            className={ cn(styles.wrapper) }
            style={ {
                backgroundColor: backgroundColor
            } }
        >
            <div className={ styles.window }>
                <div className={ styles.main }>
                    <div className={ styles.header }>
                        { weather &&
                            <CurrentTime timezone={ weather.current.timezone } />
                        }
                        <LocationIdentifier 
                            className={ styles.locationIdentifier }
                            dispatchLocationCoords={ dispatchLocationCoords }
                            clearWeather={ clearWeather }
                        />
                    </div>
                    <div className={ styles.body }>
                        { weather && 
                            <CurrentWeather currentWeather={ weather.current } />
                        }
                    </div>
                </div>
                { weather &&
                    <ForecastWeather
                        className={ styles.forecastWeather }
                        forecastWeather={ weather.forecast }
                    />
                }
                { weather &&
                    <WindowBackground 
                        className={ styles.windowBackground }
                        currentWeather={ weather.current }
                    />
                }
                { !weather &&
                    <Loader className={ styles.loader } />
                }
            </div>
        </main>
    );
};