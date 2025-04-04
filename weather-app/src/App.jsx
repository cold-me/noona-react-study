import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import './App.css';
import WeatherBox from './components/WeatherBox';
import WeatherButton from './components/WeatherButton';

/** 1.  앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
 *  2. 날씨 정보에는 도시, 섭씨, 화씨, 날씨상태
 *  3. 5개의 버튼이 존재 (1개는 현재위치, 4개는 다른 도시)
 *  4. 도시버튼을 클릭할때마다 도시별 날씨가 나온다.
 *  5. 현재 위치 기반 날씨버튼을 클릭하면 다시 현재위치 기반으로 돌아온다
 *  6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
 */
function App() {
    const [weather, setWeather] = useState(null);
    const cities = ['seoul', 'new york', 'paris', 'tokyo'];
    const [city, setCity] = useState(null);
    const [loading, setLoading] = useState(false);

    const getCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeatherByCurrentLocation(lat, lon);
        });
    };
    const getWeatherByCurrentLocation = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=94073478157af34b5a2a9d70fb237a81&units=metric`;
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
    };
    const getWeatherByCity = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94073478157af34b5a2a9d70fb237a81&units=metric`;
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
// function success(position) {
//     x.innerHTML = 'Latitude: ' + position.coords.latitude + '<br>Longitude: ' + position.coords.longitude;
// }

// function error() {
//     alert('Sorry, no position available.');
// }
