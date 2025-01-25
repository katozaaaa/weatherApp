export const getLocationCoordsByLocationName = (locationName: string) => {
    return new Promise((resolve) => {
        setTimeout(() => { 
            resolve({
                lat: 1034,
                lon: 1345,
            }) 
        }, 1000);
    });
}