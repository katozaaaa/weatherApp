export interface LocationCoordsState {
    lat?: number,
    lon?: number
}

export interface LocationCoordsAction {
    type: string,
    location?: LocationCoordsState
}

export const locationCoordsReducer = (state: LocationCoordsState, action: LocationCoordsAction) => {
    switch(action.type) {
        case 'updated': {
            if (action.location) {
                return {
                    lat: action.location.lat,
                    lon: action.location.lon
                };
            }

            return state;
        }
        case 'cleared': {
            return { };
        }
        default: {
            return state;
        }
    }
};