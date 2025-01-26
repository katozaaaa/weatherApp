export const getIP = () => {
    if (import.meta.env.MODE === 'development') {
        return new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('8.8.8.8');
            }, 1000)
        });
    }
}