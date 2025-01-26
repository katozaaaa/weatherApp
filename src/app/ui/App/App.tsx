import { useState } from 'react';
import cn from 'classnames';
import styles from './App.module.scss';
import { CurrentTime } from '@/widjets/CurrentTime';
import { LocationIdentifier } from '@/widjets/LocationIdentifier';
import { CurrentWeather, useCurrentWeather } from '@/widjets/CurrentWeather';
import { Loader } from '@/widjets/Loader';
// import { ForecastWeather } from '@/widjets/ForecastWeather';

import '@/shared/styles/index.scss';

export const App = () => {
    const [locationCoords, setLocationCoords] = useState({ lat: null, lon: null});
    const currentWeather = useCurrentWeather(locationCoords);

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
                            setLocationCoords={setLocationCoords}
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
                { locationCoords.lat && locationCoords.lon && !currentWeather &&
                    <Loader className={cn(styles['App__loader'])}/>
                }
            </div>
        </main>
    )
}