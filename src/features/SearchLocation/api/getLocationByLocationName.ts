import { mockData } from "../model/data/mockData";

export const getLocationByLocationName = (locationName: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if (mockData.hasOwnProperty(locationName)) {
                    resolve(mockData[locationName]['geonames'][0]);
                }
            }, 1000);
        }).then((location) => {
            return {
                placeName: location.name,
                countryName: location?.countryName,
                lat: location.lat,
                lon: location.lng,
            }
        });
    }
}