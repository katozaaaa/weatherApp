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
import { useIP } from '../../model/hooks/useIP';
import { useBackgroundColor } from '../../model/hooks/useBackgroundColor';
import { useState } from 'react';

import '@/shared/styles/index.scss';

export const App = () => {
    const [ error, setError ] = useState<Error | null>(null);
    const IP = useIP();
    const [ locationCoords, dispatchLocationCoords ] = useLocationCoords();
    const { weather, dispatchWeather } = useWeather(locationCoords, setError);
    const clearWeather = useClearWeather(dispatchWeather);
    const backgroundColor = useBackgroundColor(weather?.current || null);

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
                        {weather && !error && (
                            <CurrentTime timezone={ weather.current?.timezone } />
                        )}
                        <LocationIdentifier
                            className={ styles.locationIdentifier }
                            dispatchLocationCoords={ dispatchLocationCoords }
                            clearWeather={ clearWeather }
                            setError={ setError }
                            IP={ IP }
                        />
                    </div>
                    {weather?.current && !error && (
                        <div className={ styles.body }>
                            <CurrentWeather currentWeather={ weather.current } />
                        </div>
                    )}
                </div>
                {error ? (
                    <div className={ styles.notifications }>
                        <div className={ styles.error }>
                            <span> An error has occurred </span>
                            <span> Reason: { error.response.data.error } </span>
                        </div>
                    </div>
                ) : (
                    weather ? (
                        <>
                            <ForecastWeather
                                className={ styles.forecastWeather }
                                forecastWeather={ weather.forecast }
                            />
                            <WindowBackground
                                className={ styles.windowBackground }
                                currentWeather={ weather.current }
                            />
                        </>
                    ) : (
                        <div className={ styles.notifications }>
                            <Loader className={ styles.loader } />
                        </div>
                    )
                )}
            </div>
        </main>
    );
};