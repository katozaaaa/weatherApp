import { LocationData } from '@/features/SearchLocation';
import { client } from '@/shared';

export type GetLocationByIP = () => Promise<LocationData>;

export const getLocationByIP: GetLocationByIP = async () => {
    return client.get('location').then(
        (result) => {
            if (result.status === 200) {
                return result.data;
            }
        }
    );
};