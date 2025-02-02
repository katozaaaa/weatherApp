export const locationNameReducer = (state, action) => {
    switch(action.type) {
    case 'updated': {
        return action.locationName;
    }
    case 'cleared': {
        return '';
    }
    default: {
        return state;
    }
    }
};