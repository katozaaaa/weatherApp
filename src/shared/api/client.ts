import axios from 'axios';

interface APIError extends Error {
    response?: {
        data?: {
            error?: string;
        };
    };
}

export const client = (() => {
    const instance = axios.create({
        baseURL: __API_BASE_URL__
    });

    const instanceGet = instance.get;

    instance.get = async <T>(...args: Parameters<typeof instanceGet>): Promise<T> => {
        try {
            const response: any = await instanceGet.apply(instance, args);
            return response.data;
        } catch (error) {
            const APIError = error as APIError;
            throw new Error(APIError.response?.data?.error || 'Unknown error occurred');
        }
    };

    return instance;
})();