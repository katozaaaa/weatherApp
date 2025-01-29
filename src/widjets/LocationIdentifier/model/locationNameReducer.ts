export const locationNameReducer = (_, action) => {
    switch(action.type) {
        case 'updated': {
            return action.locationName;
        }
        case 'cleared': {
            return '';
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
}