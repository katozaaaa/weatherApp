export const toUTCMilliseconds = (date: Date) => {
    if (date == null) {
        throw new Error('Date cannot be an null or undefined');
    }

    const offset = date.getTimezoneOffset() * 60 * 1000;

    return Date.UTC(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ) + offset;
};