import cn from 'classnames';
import styles from './WindowBackground.module.scss';
import { useWindowBackground } from '../model/hooks/useWindowBackground';

export const WindowBackground = ({ className, weatherData }) => {
    const windowBackground = useWindowBackground(weatherData);

    return (
        <picture 
            className={cn(
                styles.WindowBackground,
                className
            )}
        >
            <source srcSet={`./images/${windowBackground.fileName}.jpg, ./images/${windowBackground.fileName}@2x.jpg 2x`} type={'image/jpg'} />
            <img src={`./images/${windowBackground.fileName}.jpg`} />
        </picture>
    );
};