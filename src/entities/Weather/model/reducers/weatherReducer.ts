import { produce } from 'immer';

export const weatherReducer = produce((draft, action) => {
    switch(action.type) {
        case 'updated': {
            draft.current = {
                ...action.weather
            };

            break;
        }
        case 'cleared': {
            draft.current = null;
            break;
        }
        default: {
            break;
        }
    }
});