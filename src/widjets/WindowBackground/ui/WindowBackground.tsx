import cn from 'classnames';
import styles from './WindowBackground.module.scss';
import { useWindowBackground } from '../model/hooks/useWindowBackground';
import { CurrentWeatherData } from '@/entities/Weather';

interface WindowBackgroundProps {
    className?: string;
    currentWeather: CurrentWeatherData
}

export const WindowBackground = ({ className, currentWeather }: WindowBackgroundProps) => {
    const windowBackground = useWindowBackground(currentWeather);

    return (
        <picture 
            className={ cn(
                styles.container,
                className
            ) }
        >
            <source
                srcSet={ `./images/${windowBackground.fileName}.jpg, ./images/${windowBackground.fileName}@2x.jpg 2x` }
                type={ 'image/jpg' }
            />
            <img src={ `./images/${windowBackground.fileName}.jpg` } />
        </picture>
    );
};