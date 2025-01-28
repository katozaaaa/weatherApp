import { mockData } from "../model/mockData";

export const getLocationByIP = (ip: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (mockData.hasOwnProperty(ip)) {
                    resolve(mockData[ip])
                }
            }, 1000);
        })
    }
}