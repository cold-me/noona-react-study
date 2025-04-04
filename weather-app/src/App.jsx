import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

function App() {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const [weather, setWeather] = useState(null);
    const cities = ['seoul', 'new york', 'paris', 'tokyo'];
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);
    const citiesBackground = {
        current: 'https://videos.pexels.com/video-files/31197958/13326009_2560_1440_25fps.mp4',
        seoul: 'https://videos.pexels.com/video-files/1860079/1860079-uhd_2560_1440_25fps.mp4',
        'new york': 'https://videos.pexels.com/video-files/3202634/3202634-hd_1920_1080_30fps.mp4',
        paris: 'https://videos.pexels.com/video-files/4272751/4272751-hd_1920_1080_30fps.mp4',
        tokyo: 'https://videos.pexels.com/video-files/5845559/5845559-uhd_2732_1440_24fps.mp4',
    };

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log('data', data);
        setCity('current');
        setWeather(data);
        setLoading(false);
    };
    const getWeatherByCity = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
    };
    useEffect(() => {
        if (city === null || city === 'current') getCurrentLocation();
        else getWeatherByCity();
    }, [city]);

    return (
        <>
            <video key={city} autoPlay loop muted playsInline className='background-video'>
                <source src={(city && citiesBackground[city]) || citiesBackground['current']} type='video/mp4' />
            </video>
            {loading ? (
                <div className='container'>
                    <ClipLoader color='#f88c6b' loading={loading} size={150} />
                </div>
            ) : (
                <div className='container'>
                    <WeatherBox weather={weather} />
                    <WeatherButton cities={cities} setCity={setCity} />
                </div>
            )}
        </>
    );
}

export default App;
