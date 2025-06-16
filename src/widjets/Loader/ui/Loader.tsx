import cn from 'classnames';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={ cn(styles.loader, className) }>
            <svg width="187" height="187" viewBox="0 0 187 187" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="93.5" cy="93.5" r="88.5" stroke="white" strokeOpacity="0.4" strokeWidth="10"/>
                <path d="M5 93.5C4.99999 81.878 7.28911 70.3698 11.7367 59.6325C16.1842 48.8952 22.7031 39.139 30.921 30.921C39.139 22.7031 48.8952 16.1842 59.6325 11.7367C70.3698 7.28912 81.878 5 93.5 5" stroke="white" strokeWidth="10"/>
            </svg>
        </div>
    );
};