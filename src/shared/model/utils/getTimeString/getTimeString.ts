export const getTimeString = (date: Date) => {
    if (date == null) {
        throw new Error('Date cannot be an null or undefined');
    }

    return date.toLocaleTimeString('ru-RU', {
        hour: '2-digit', 
        minute: '2-digit'
    });
};