import cn from 'classnames';
import styles from './SearchLocationByIP.module.scss';

export const SearchLocationByIP = (props) => {
    const {
        searchLocationByIP,
        isSearching
    } = props;

    return (
        <button 
            className={cn(styles.SearchLocationByIP)}
            onClick={searchLocationByIP}
            disabled={isSearching}
        >
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1227 5.71905L19.1235 5.7168L19.1205 5.72055L2.625 12.7675L10.959 13.8843L12.0743 22.2168L19.1213 5.7228L19.125 5.7183L19.1227 5.71905Z" fill="none"/>
            </svg>
        </button>
    )
}