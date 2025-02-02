import { useState, useEffect, useCallback } from 'react';
import { toLocaleDate, getTimeString } from '@/shared';

export const CurrentTime = ({ timezone }) => {
    const [currentTime, setCurrentTime] = useState('');

    const updateTime = useCallback(() => {
        setCurrentTime(
            getTimeString(
                toLocaleDate(
                    new Date(), 
                    timezone
                )
            )
        );
    }, [timezone]);

    useEffect(() => {
        updateTime();
        const timerID = setInterval(updateTime, 1000);

        return () => { clearInterval(timerID); };
    }, [timezone]);

    return (
        <div>
            Now { currentTime }
        </div>
    );
};