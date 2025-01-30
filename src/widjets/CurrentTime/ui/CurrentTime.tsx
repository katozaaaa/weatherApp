import { useState, useEffect } from 'react';

export const CurrentTime = ({ timezone }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const now = new Date(Date.now() + timezone);
        setCurrentTime(now.toLocaleTimeString(
            'en-EN', { hour: '2-digit', minute: '2-digit' }
        ));
        
        const timerID = setInterval(() => {
            const now = new Date(Date.now() + timezone);
            setCurrentTime(now.toLocaleTimeString(
                'en-EN', { hour: '2-digit', minute: '2-digit' }
            ));
        }, 1000);

        return () => { clearInterval(timerID); };
    }, [timezone]);

    return (
        <div>
            Now { currentTime }
        </div>
    );
};