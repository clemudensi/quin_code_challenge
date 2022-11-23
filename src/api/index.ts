import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://lldev.thespacedevs.com';

export const rocketLaunchApi: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-type': 'application/json',
    },
});
