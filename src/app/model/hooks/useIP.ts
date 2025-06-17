import { useState, useEffect } from 'react';
import { getIP } from '../../api/getIP';

export const useIP = () => {
    const [ IP, setIP ] = useState(null);

    useEffect(() => {
        const expire = { current: false };

        getIP().then(
            (result) => {
                if (!expire.current) {
                    setIP(result.ip);
                }
            }
        );

        return () => {
            expire.current = true;
        };
    }, []);

    return IP;
};