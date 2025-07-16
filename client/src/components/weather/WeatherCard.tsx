import type React from "react";
import { WiDaySunny, WiRain, WiStrongWind } from "react-icons/wi";

import { useGeolocation } from "../../hooks/useGeolocalisation";
import { useWeather } from "../../hooks/useWeather";

import "./weather.css";

export const WeatherCard: React.FC = () => {
  const { position, error: geoError } = useGeolocation();
  const {
    data,
    loading,
    error: weatherError,
  } = useWeather(position?.lat ?? 0, position?.lon ?? 0);

  if (geoError) return <p className="error">{geoError}</p>;
  if (!position) return <p>📍 Localisation en cours...</p>;
  if (loading) return <p>⏳ Chargement des données météo...</p>;
  if (weatherError || !data)
    return <p className="error">❌ Erreur météo : {weatherError}</p>;

  return (
    <div className="weather-card">
      <div className="header">
        <h2>🌦️ Weather Today</h2>
        <span>
          {new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="main">
        <WiDaySunny size={64} className="sun-icon" />
        <p className="temperature">{data.temperature.toFixed(1)}°C</p>
        <p className="subtitle">Temperature</p>
      </div>

      <div className="details">
        <div className="detail-item">
          <WiRain size={28} className="rain-icon" />
          <span>{data.precipitation.toFixed(1)} mm/h</span>
        </div>
        <div className="detail-item">
          <WiStrongWind size={28} className="wind-icon" />
          <span>{(data.windSpeed * 3.6).toFixed(1)} km/h</span>
        </div>
      </div>

      {data.alert && <div className="alert">{data.alert}</div>}
    </div>
  );
};
