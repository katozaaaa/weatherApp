import { useReducer } from 'react';
import { locationCoordsReducer } from "./locationCoordsReducer"

export const useLocationCoords = () => {
    return useReducer(locationCoordsReducer, { lat: null, lon: null })
}