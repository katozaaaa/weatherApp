import { LocationData } from '@/features/SearchLocation';
import { client } from '@/shared';

interface IP {
    value?: string,
}

export type GetLocationByIP = (ip: IP) => Promise<LocationData>;

export const getLocationByIP: GetLocationByIP = async (ip) => {
    if (!ip.value) {
        return { };
    }

    return client.get('location', {
        params: { ip: ip.value }
    });
};