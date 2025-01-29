import { useReducer } from 'react';
import { locationNameReducer } from './locationNameReducer';

export const useLocationName = () => {
    return useReducer(locationNameReducer, '');
}