export const getLocationCoordsByLocationName = (locationName: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if (locationName === 'Moscow, Russia') {
                    resolve({
                        lat: 37.386,
                        lon: -122.0838,
                    }) 
                } else {
                    reject('There is no such location.')
                }
            }, 1000);
        });
    }
}