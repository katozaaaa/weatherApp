export const toLocaleDate = (date: Date, timezone) => {
    const offset = date.getTimezoneOffset() * 60 * 1000;
    
    const localeDate = new Date(
        Date.UTC(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds(),
        ) + offset * 2 + timezone * 1000
    );

    return localeDate;
}