export type LocationNameState = string | null;

export interface LocationNameAction {
    type: string,
    locationName?: LocationNameState,
}

export const locationNameReducer = (state: LocationNameState, action: LocationNameAction) => {
    switch(action.type) {
        case 'updated': {
            if (action.locationName || action.locationName === '') {
                return action.locationName;
            }

            return state;
        }
        case 'cleared': {
            return '';
        }
        default: {
            return state;
        }
    }
};