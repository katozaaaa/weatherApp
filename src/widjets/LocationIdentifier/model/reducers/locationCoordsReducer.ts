export interface LocationCoordsState {
    lat: number | null,
    lon: number | null
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
            return {
                lat: null,
                lon: null
            };
        }
        default: {
            return state;
        }
    }
};