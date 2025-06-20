import { client } from '@/shared';

type GetIP = () => Promise<{ ip: string }>;

export const getIP: GetIP = async () => {
    return client.get('ip');
};