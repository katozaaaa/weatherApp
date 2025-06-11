export const getNow = () => {
    if (import.meta.env.MODE === 'development') {
        return new Date('April 13, 2025 20:21:10');
    }
    
    return new Date();
};