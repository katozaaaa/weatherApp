interface Time {
    forecast: number,
    sunrise: number,
    sunset: number,
}

export const getTimeOfDay = (time: Time) => {
    if (
        time.forecast == null ||
        time.sunrise == null ||
        time.sunset == null
    ) {
        throw new Error('Time data cannot be an null or undefined');
    }

    if (
        time.forecast < time.sunrise ||
        time.forecast >= time.sunset
    ) {
        return 'night';
    }

    return 'day';
};