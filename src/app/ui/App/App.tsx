import cn from 'classnames';
import styles from './App.module.scss';
import { CurrentTime } from '@/widjets/CurrentTime';
import { LocationIdentifier } from '@/widjets/LocationIdentifier';
import { useWeather } from '@/entities/Weather';
import { CurrentWeather } from '@/widjets/CurrentWeather';
import { ForecastWeather } from '@/widjets/ForecastWeather';
import { WindowBackground } from '@/widjets/WindowBackground/';
import { useLocationCoords } from '@/widjets/LocationIdentifier';
import { Loader } from '@/widjets/Loader';
import { useIP } from '../../model/hooks/useIP';
import { useBackgroundColor } from '../../model/hooks/useBackgroundColor';
import { useState } from 'react';

import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query';

import '@/shared/styles/index.scss';

const queryClient = new QueryClient();

export const App = () => {
    const [ error, setError ] = useState<Error | null>(null);
    const IP = useIP();
    const [ locationCoords, dispatchLocationCoords ] = useLocationCoords();

    const weather = useWeather({
        queryClient,
        locationCoords,
        setError
    });

    const displayWeather = (
        weather.isSuccess &&
        weather.data !== null &&
        !error
    );

    const backgroundColor = useBackgroundColor(
        displayWeather
            ? weather.data!.current
            : null
    );

    return (
        <QueryClientProvider client={ queryClient }>
            <main
                className={ cn(styles.wrapper) }
                style={ {
                    backgroundColor: backgroundColor
                } }
            >
                <div className={ styles.window }>
                    <div className={ cn(
                        styles.main,
                        !displayWeather && styles.mainDisplayContents
                    ) }>
                        <div className={ styles.header }>
                            {displayWeather && (
                                <CurrentTime timezone={ weather.data!.current?.timezone } />
                            )}
                            <LocationIdentifier
                                className={ styles.locationIdentifier }
                                dispatchLocationCoords={ dispatchLocationCoords }
                                setError={ setError }
                                IP={ IP }
                            />
                        </div>
                        { displayWeather && (
                            <div className={ styles.content }>
                                <CurrentWeather currentWeather={ weather.data!.current } />
                            </div>
                        )}
                    </div>
                    {error ? (
                        <div className={ styles.notifications }>
                            <div className={ styles.error }>
                                <span> An error has occurred </span>
                                <span> Reason: { error.message } </span>
                            </div>
                        </div>
                    ) : (
                        displayWeather ? (
                            <>
                                <ForecastWeather
                                    className={ styles.forecastWeather }
                                    forecastWeather={ weather.data!.forecast }
                                />
                                <WindowBackground
                                    className={ styles.windowBackground }
                                    currentWeather={ weather.data!.current }
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
        </QueryClientProvider>
    );
};