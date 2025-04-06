import React from 'react';

const WeatherBox = ({ weather }) => {
    const titleColor = {
        current: 'blue',
        seoul: 'orange',
        'new york': 'yellow',
        paris: 'green',
        tokyo: 'red',
    };
    const celcius = weather?.main.temp;
    const fahrenheit = celcius && (celcius * 1.8 + 32).toFixed(3);
    console.log(celcius, fahrenheit);
    return (
        <div className='weather-box'>
            <h1 style={{ color: titleColor[weather?.name.toLowerCase()] || titleColor['current'] }}>{weather?.name}</h1>
            <h2 className='italic-text'>Temperature</h2>
            <div className='margin-box'>
                <h4>🌡️ {celcius}°C</h4>
                <h4>🌡️ {fahrenheit}°F</h4>
            </div>
            <h2 className='italic-text'>Today's mood</h2>
            <div className='vertical-box'>
                <img
                    className='mood-img'
                    src={`https://openweathermap.org/img/wn/${[weather?.weather[0].icon]}@2x.png`}
                    alt='mood-img'
                />
                <h4>{weather?.weather[0].description}</h4>
            </div>
        </div>
    );
};

export default WeatherBox;
