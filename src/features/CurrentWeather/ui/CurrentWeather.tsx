export const CurrentWeather = ({ currentWeather }) => {
    const sign = currentWeather.main.temp > 0 ? '+' :
        currentWeather.main.temp < 0 ? '-' : '';
        
    return (
        <div>
            <div> 
                <div> { sign + currentWeather.main.temp }° </div>
                <div>
                    <div>
                        { currentWeather.weather.description }
                    </div>
                    <div>
                        Feels like { currentWeather.main.feelsLike }°
                    </div>
                </div>
            </div>
            <div>
                <div>
                    Wind { currentWeather.wind.speed } k/m
                </div>
                <div>
                    Direction { currentWeather.wind.deg }
                </div>
                <div>
                    Humidity { currentWeather.main.humidity }%
                </div>
                <div>
                    { currentWeather.main.pressure } mmHg
                </div>
            </div>
        </div>
    )
}