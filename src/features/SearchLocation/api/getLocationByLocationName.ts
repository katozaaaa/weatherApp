import { mockData } from '../model/data/mockData';

export const getLocationByLocationName = (locationName: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                const key = Object.keys(mockData).find((key) => {
                    return key.toLowerCase().includes(locationName.toLocaleLowerCase());
                });

                if (key) {
                    resolve(mockData[key]['geonames'][0]);
                } else {
                    reject(new Error(`Unknown location ${locationName}`));
                }
            }, 1000);
        }).then(
            (location) => {
                return {
                    placeName: location.name,
                    countryName: location?.countryName,
                    lat: location.lat,
                    lon: location.lng
                };
            }
        );
    }
};