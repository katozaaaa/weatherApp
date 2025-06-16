import { mockData } from '../model/data/mockData';
import { LocationData } from '@/features/SearchLocation';

export interface LocationByIPData {
    [index: string]: any
}

export type GetLocationByIP = () => Promise<LocationData>;

export const getLocationByIP: GetLocationByIP = () => {
    if (import.meta.env.MODE === 'development') {
        return new Promise<LocationByIPData>((resolve, reject) => {
            setTimeout(() => {
                if (Object.prototype.hasOwnProperty.call(mockData, __MOCK_IP__)) {
                    resolve(mockData[__MOCK_IP__]);
                } else {
                    reject(new Error(`Unable to find location with IP ${__MOCK_IP__}`));
                }
            }, 1000);
        }).then(
            (response) => {
                if (response.error) {
                    throw new Error(response.reason);
                }

                return {
                    placeName: String(response['city']),
                    countryName: String(response['country_name']),
                    lat: Number(response['latitude']),
                    lon: Number(response['longitude'])
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