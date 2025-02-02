import { toUTCMilliseconds } from './toUTCMilliseconds';

export const toLocaleDate = (date: Date, timezone: number) => {
    const offset = date.getTimezoneOffset() * 60 * 1000;
    return new Date(toUTCMilliseconds(date) + offset + timezone * 1000);
};