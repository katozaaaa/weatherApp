import { useState, useEffect } from 'react';
import { getIP } from '../../api/getIP';

export const useIP = () => {
    const [ IP, setIP ] = useState<string | null>(null);

    useEffect(() => {
        const expire = { current: false };

        getIP().then(
            (data) => {
                if (!expire.current) {
                    setIP(data.ip);
                }
            }
        );

        return () => {
            expire.current = true;
        };
    }, []);

    return IP;
};