import { useReducer } from 'react';
import { locationNameReducer } from '../reducers/locationNameReducer';

export const useLocationName = () => {
    return useReducer(locationNameReducer, '');
};