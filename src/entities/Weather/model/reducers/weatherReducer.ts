import { produce } from 'immer';
import { WeatherData } from '../../api/getWeather';

export interface WeatherState {
    current: WeatherData | null
}

export interface WeatherAction {
    type: string,
    weather?: WeatherData
}

export const weatherReducer = produce(
    (draft: WeatherState, action: WeatherAction) => {
        switch(action.type) {
            case 'updated': {
                if (action.weather) {
                    draft.current = action.weather;
                }

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
    }
);