interface Time {
    forecast: number,
    sunrise: number,
    sunset: number,
}

export const getTimeOfDay = (time: Time) => {
    if (
        time.forecast * 1000 < time.sunrise * 1000 ||
        time.forecast * 1000 >= time.sunset * 1000
    ) {
        return 'night';
    }

    return 'day';
};