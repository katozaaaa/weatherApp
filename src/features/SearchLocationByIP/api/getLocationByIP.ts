import { mockData } from "../model/data/mockData";

export const getLocationByIP = (ip: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (mockData.hasOwnProperty(ip)) {
                    resolve(mockData[ip])
                }
            }, 1000);
        }).then((location) => {
            return {
                placeName: location['city'],
                countryName: location['country_name'],
                lat: location['latitude'], 
                lon: location['longitude'],
            }
        });
    }
}