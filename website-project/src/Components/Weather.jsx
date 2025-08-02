import React, { useEffect, useState } from "react";

const API_KEY = "4f7863151bbee3671e6a7af8d882d56a";

 function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
      },
      () => {
        fetchWeather(51.0447, -114.0719);
      }
    );
  }, []);

  async function fetchWeather(lat, lon) {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      if (data.cod !== 200) {
        setError(data.message || "Weather not found");
      } else {
        setWeather(data);
      }
    } catch {
      setError("Failed to fetch weather.");
    }
  }

  if (error) return <div className="widget-card">❌ {error}</div>;
  if (!weather) return <div className="widget-card">Loading weather...</div>;

  return (
    <div className="widget-card">
      <h3>☀️ Weather</h3>
      <p><strong>{weather.name}</strong></p>
      <p>{weather.weather[0].description}</p>
      <p>{Math.round(weather.main.temp)}°C</p>
    </div>
  );
}
export default WeatherWidget
