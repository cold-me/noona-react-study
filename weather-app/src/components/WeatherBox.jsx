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
    const fahrenheit = (celcius * 1.8 + 32).toFixed(3);
    return (
        <div className='weather-box'>
            <h1 style={{ color: titleColor[weather?.name.toLowerCase()] || titleColor['current'] }}>{weather?.name}</h1>
            <h4 className='italic-text'>Temperature</h4>
            <div className='margin-box'>
                <div>🌡️ {celcius}°C</div>
                <div>🌡️ {fahrenheit}°F</div>
            </div>
            <h4 className='italic-text'>Today's mood</h4>
            <div className='vertical-box'>
                {/* <img className='mood-img' src={moods[weather?.weather[0].description]} alt='mood-img' /> */}
                <img
                    className='mood-img'
                    src={`https://openweathermap.org/img/wn/${[weather?.weather[0].icon]}@2x.png`}
                    alt='mood-img'
                />
                {weather?.weather[0].description}
            </div>
        </div>
    );
};

export default WeatherBox;
