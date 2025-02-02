export const toUTCMilliseconds = (date: Date) => {
    const offset = date.getTimezoneOffset() * 60 * 1000;
    
    return Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
    ) + offset;
}