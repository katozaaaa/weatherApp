export const getTimeString = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit', 
        minute: '2-digit'
    });
};