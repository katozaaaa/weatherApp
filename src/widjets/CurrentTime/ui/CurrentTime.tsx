import { useState, useEffect, useCallback } from 'react';
import { toLocaleDate, getTimeString, getNow } from '@/shared';

interface CurrentTimeProps {
    timezone: number,
}

export const CurrentTime = ({ timezone }: CurrentTimeProps) => {
    const [ currentTime, setCurrentTime ] = useState('');

    const updateTime = useCallback(() => {
        setCurrentTime(
            getTimeString(
                toLocaleDate(
                    getNow(), 
                    timezone
                )
            )
        );
    }, [ timezone ]);

    useEffect(() => {
        updateTime();
        const timerID = setInterval(updateTime, 1000);

        return () => { clearInterval(timerID); };
    }, [ timezone ]);

    return (
        <div>
            Now { currentTime }
        </div>
    );
};