export const locationCoordsReducer = (_, action) => {
    switch(action.type) {
        case 'updated': {
            return {
                lat: action.location.lat,
                lon: action.location.lon,
            }
        }
        case 'cleared': {
            return {
                lat: null,
                lon: null,
            }
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
}