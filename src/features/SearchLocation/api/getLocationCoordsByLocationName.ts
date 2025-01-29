import { mockData } from "../model/mockData";

export const getLocationCoordsByLocationName = (locationName: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if (mockData.hasOwnProperty(locationName)) {
                    resolve(mockData[locationName]['geonames'][0]);
                }
            }, 1000);
        }).then((location) => {
            return {
                lat: location.lat,
                lon: location.lng,
                placeName: location.name,
                countryName: location?.countryName,
            }
        });
    }
}