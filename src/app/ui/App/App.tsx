import { CurrentTime } from '@/features/CurrentTime';
import { LocationIdentifier } from '@/features/LocationIdentifier';
import { CurrentWeather } from '@/features/CurrentWeather';
import { ForecastWeather } from '@/features/ForecastWeather';

import '@/shared/styles/index.scss';

export const App = () => {
    return (
        <main>
            <div>
                <div>
                    <CurrentTime />
                    <LocationIdentifier />
                </div>
                <CurrentWeather />
                <ForecastWeather />
            </div>
        </main>
    )
}