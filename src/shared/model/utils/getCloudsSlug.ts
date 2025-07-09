type GetCloudsSlug = (
    weatherId: number,
    cloudsPercentage: number
) => 'no-clouds' | 'scattered-clouds' | 'overcast-clouds';

export const getCloudsSlug: GetCloudsSlug = (weatherId, cloudsPercentage) => {
    if (
        weatherId === 800 &&
        cloudsPercentage <= 25
    ) {
        return 'no-clouds';
    } else if (cloudsPercentage <= 50) {
        return 'scattered-clouds';
    } else {
        return 'overcast-clouds';
    }
};