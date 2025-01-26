export const getLocationCoordsByLocationName = (locationName: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve) => {
            setTimeout(() => { 
                resolve({
                    lat: 1034,
                    lon: 1345,
                }) 
            }, 1000);
        });
    }
}