import { useReducer } from 'react';
import { locationCoordsReducer } from '../reducers/locationCoordsReducer';

export const useLocationCoords = () => {
    return useReducer(locationCoordsReducer, { });
};