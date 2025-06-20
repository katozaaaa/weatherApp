import { LocationData } from '@/features/SearchLocation';
import { client } from '@/shared';

export type GetLocationByIP = (IP: string) => Promise<LocationData>;

export const getLocationByIP: GetLocationByIP = async (IP) => {
    return client.get('location', {
        params: { ip: IP }
    });
};