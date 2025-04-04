import React from 'react';

const WeatherBox = ({ weather }) => {
    console.log(`weather: `);
    console.log(weather);
    const celcius = weather?.main.temp;
    const fahrenheit = celcius;
    return (
        <div className='weather-box'>
            <div>📍{weather?.name}</div>
            <div>
                🌡️{celcius}°C/{fahrenheit}°F
            </div>
            <div>🌈 {weather?.weather[0].description}</div>
        </div>
    );
};

export default WeatherBox;
