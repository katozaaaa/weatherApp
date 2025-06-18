import { useState, useEffect, useCallback } from 'react';
import { toLocaleDate, getTimeString } from '@/shared';

interface CurrentTimeProps {
    timezone: number,
}

export const CurrentTime = ({ timezone }: CurrentTimeProps) => {
    const [ currentTime, setCurrentTime ] = useState('');

    const updateTime = useCallback(() => {
        setCurrentTime(
            getTimeString(
                toLocaleDate(
                    new Date(),
                    timezone
                )
            )
        );
    }, [ timezone ]);

    useEffect(() => {
        updateTime();
        const timerID = setInterval(updateTime, 1000);

        return () => { clearInterval(timerID); };
    }, [ timezone, updateTime ]);

    return (
        <div>
            Now { currentTime }
        </div>
    );
};