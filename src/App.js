import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_URL,WEATHER_API_KEY} from './components/api';

function App() {
/*
  const handleOnSearchChange = (searchData) => {
    const [lat,lon] = searchData.value.split("");

    const currentweatherFetch = fetch("${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}");
    const forecastFetch = fetch("${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}");

    promise.all([currentweatherFetch,forecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
    })
    
  }
  */

  return (
    <div className="container">
      <CurrentWeather />
    </div>
  );
}

export default App;
