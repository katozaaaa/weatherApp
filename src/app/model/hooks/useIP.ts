import { useState, useEffect } from 'react';
import { getIP } from '../../api/getIP';

interface IP {
    value?: string
}

export const useIP = () => {
    const [ IP, setIP ] = useState<IP>({});

    useEffect(() => {
        const expire = { current: false };

        getIP().then(
            (data) => {
                if (!expire.current) {
                    setIP({
                        value: data.ip
                    });
                }
            }
        );

        return () => {
            expire.current = true;
        };
    }, []);

    return IP;
};