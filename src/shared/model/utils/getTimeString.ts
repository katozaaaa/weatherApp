export const getTimeString = (date) => {
    return date.toLocaleTimeString('en-EN', { 
        hour: '2-digit', 
        minute: '2-digit'
    });
};