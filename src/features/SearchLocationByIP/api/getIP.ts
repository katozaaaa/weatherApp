export const getIP = () => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(__MOCK_IP__);
            }, 1000);
        });
    }
};