import { client } from '@/shared/api/client.ts';

export interface LocationData {
    placeName: string,
    countryName: string,
    lat: number,
    lon: number,
}

export type GetLocationByLocationName = (locationName: string) => Promise<LocationData>;

export const getLocationByLocationName: GetLocationByLocationName = async (locationName) => {
    return client.get(
        'location',
        {
            params: {
                name: locationName
            }
        }
    ).then(
        (result) => {
            if (result.status === 200) {
                return result.data;
            }
        }
    );
};