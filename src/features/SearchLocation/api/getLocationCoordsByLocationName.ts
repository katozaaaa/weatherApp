import { mockData } from "../model/mockData";

export const getLocationCoordsByLocationName = (locationName: string) => {
    if (import.meta.env.MODE === 'development') {
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                resolve(mockData[locationName]) 
            }, 1000);
        });
    }
}