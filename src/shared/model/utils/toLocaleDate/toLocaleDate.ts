import { toUTCMilliseconds } from '@/shared';

export const toLocaleDate = (date: Date, timezone: number) => {
    if (date == null) {
        throw new Error('Date cannot be an null or undefined');
    }

    if (timezone == null) {
        throw new Error('Timezone cannot be an null or undefined');
    }

    const offset = date.getTimezoneOffset() * 60 * 1000;
    return new Date(toUTCMilliseconds(date) + offset + timezone * 1000);
};