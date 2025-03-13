import { useState, useEffect } from "react";
import "./App.css"; // Import CSS file

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [bgColor, setBgColor] = useState("");

  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const getWeather = async () => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === 200) {
        setWeather(data);
        changeBackgroundColor(data.weather[0].main);
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const changeBackgroundColor = (condition) => {
    console.log("Weather condition:", condition); // Debugging line
    switch (condition.toLowerCase()) {
      case "clear":
        setBgColor("#87CEEB"); // Sky blue
        break;
      case "clouds":
        setBgColor("#B0C4DE"); // Light steel blue
        break;
      case "rain":
        setBgColor("#4682B4"); // Steel blue
        break;
      case "snow":
        setBgColor("#FFFAFA"); // Snow white
        break;
      case "drizzle":
        setBgColor("#5F9EA0"); // Cadet blue
        break;
      case "thunderstorm":
        setBgColor("#2F4F4F"); // Dark slate gray
        break;
      default:
        setBgColor("#D3D3D3"); // Light gray
        break;
    }
  };

  useEffect(() => {
    console.log("Background color changed to:", bgColor); // Debugging line
    document.body.style.backgroundColor = bgColor;
  }, [bgColor]);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <div className="weather-icon-container">
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="Weather Icon" 
          />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
