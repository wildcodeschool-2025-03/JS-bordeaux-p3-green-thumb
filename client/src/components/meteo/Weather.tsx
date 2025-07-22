import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";
import "./Weather.css";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

type WeatherData = {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
};

const Weather = () => {
  const { user } = useUserContext();
  const city = user.infoUser?.city;

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            city,
          )}&appid=${API_KEY}&units=metric&lang=fr`,
        );

        if (!response.ok)
          throw new Error("Erreur lors de la récupération de la météo.");

        const data = await response.json();
        setWeather(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Impossible de récupérer les données météo.");
      }
    };

    fetchWeather();
  }, [city]);

  if (!city) return null;
  if (error) return <div className="weather-error">{error}</div>;

  return (
    <div className="weather-widget">
      {weather && (
        <>
          <div className="weather-top">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
              className="weather-icon"
            />
            <div className="weather-temp">
              {Math.round(weather.main.temp)}°C
            </div>
          </div>
          <div className="weather-title">
            💧{weather.main.humidity}% - {weather.name}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
