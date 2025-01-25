export const getIP = () => {
    return new Promise<string>((resolve) => {
        setTimeout(() => {
            resolve('8.8.8.8');
        }, 1000)
    })
}