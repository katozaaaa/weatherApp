import { mockData } from '../model/data/mockData';

export const getLocationByIP = () => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (mockData.hasOwnProperty(__MOCK_IP__)) {
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
                    placeName: response['city'],
                    countryName: response['country_name'],
                    lat: response['latitude'],
                    lon: response['longitude']
                };
            }
        );
    }
};