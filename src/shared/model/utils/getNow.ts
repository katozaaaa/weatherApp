export const getNow = () => {
    if (import.meta.env.MODE === 'development') {
        return new Date('February 3, 2025 01:44:10');
    }
    
    return new Date();
}