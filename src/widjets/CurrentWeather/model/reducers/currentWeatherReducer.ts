import { produce } from 'immer';

interface CurrentWeatherState {
    current: {
        weather: {
            id: number,
            description: string,
        },
        main: {
            temp: number,
            feelsLike: number,
            pressure: number,
            humidity: number,
        },
        wind: {
            speed: number,
            deg: number,
        },
        clouds: number,
        sys: {
            sunrise: number,
            sunset: number,
        },
        timezone: number,
    }
}

export const currentWeatherReducer = produce((draft, action) => {
    switch(action.type) {
    case 'updated': {
        draft.current = {
            ...action.currentWeather
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