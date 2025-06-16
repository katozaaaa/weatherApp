import { mockData } from '../model/data/mockData';

interface LocationInitialData {
    [index: string]: any
}

export interface LocationData {
    placeName: string,
    countryName: string,
    lat: number,
    lon: number,
}

export type GetLocationByLocationName = (locationName: string) => Promise<LocationData>;

export const getLocationByLocationName: GetLocationByLocationName = (locationName) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise<LocationInitialData>((resolve, reject) => {
            setTimeout(() => { 
                const key = Object.keys(mockData).find((key) => {
                    return key.toLowerCase().includes(locationName.toLocaleLowerCase());
                });

                if (key) {
                    resolve(mockData[key]['geonames'][0]);
                } else {
                    reject(new Error('Unknown location'));
                }
            }, 1000);
        }).then(
            (location) => {
                return {
                    placeName: String(location.name),
                    countryName: String(location?.countryName),
                    lat: Number(location.lat),
                    lon: Number(location.lng)
                };
            }
        );
    } else {
        return new Promise(
            (resolve) => {
                resolve({
                    placeName: '',
                    countryName: '',
                    lat: 0,
                    lon: 0
                });
            }
        );
    }
};