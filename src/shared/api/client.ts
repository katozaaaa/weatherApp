import axios from 'axios';

export const client = axios.create({
    baseURL: __API_BASE_URL__
});