import { useEffect, useState } from "react";

interface WeatherData {
  temperature: number;
  precipitation: number;
  windSpeed: number;
  alert: string | null;
}

export const useWeather = (lat: number, lon: number) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!lat || !lon) {
      console.log("⚠️ useWeather: lat or lon missing", { lat, lon });
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);

      const username = import.meta.env.VITE_METEOMATICS_USERNAME;
      const password = import.meta.env.VITE_METEOMATICS_PASSWORD;

      console.log("🔑 Meteomatics credentials:", { username, password });

      const now = new Date().toISOString().slice(0, 13); // "YYYY-MM-DDTHH"
      const parameters = "t_2m:C,precip_1h:mm,wind_speed_10m:ms";
      const url = `https://api.meteomatics.com/${now}:00Z/${parameters}/${lat},${lon}/json`;

      console.log("🌐 Fetching Meteomatics URL:", url);

      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Basic ${btoa(`${username}:${password}`)}`,
          },
        });

        if (!response.ok) {
          console.error(
            "❌ API response not ok:",
            response.status,
            response.statusText,
          );
          throw new Error(
            `Erreur API Meteomatics: ${response.status} ${response.statusText}`,
          );
        }

        const json = await response.json();
        console.log("📦 Meteomatics API response:", json);

        interface WeatherParameter {
          parameter: string;
          coordinates: {
            dates: {
              value: number;
            }[];
          }[];
        }

        const temperature = (json.data as WeatherParameter[]).find(
          (d) => d.parameter === "t_2m:C",
        )?.coordinates[0]?.dates[0]?.value;

        const precipitation = (json.data as WeatherParameter[]).find(
          (d) => d.parameter === "precip_1h:mm",
        )?.coordinates[0]?.dates[0]?.value;

        const windSpeed = (json.data as WeatherParameter[]).find(
          (d) => d.parameter === "wind_speed_10m:ms",
        )?.coordinates[0]?.dates[0]?.value;

        console.log(
          "🌡️ Temp:",
          temperature,
          "💧 Precipitation:",
          precipitation,
          "💨 WindSpeed:",
          windSpeed,
        );

        let alert: string | null = null;
        if (typeof temperature === "number" && temperature >= 35)
          alert = "🌡️ Alerte canicule !";
        else if (typeof precipitation === "number" && precipitation >= 5)
          alert = "🌧️ Averse importante !";
        else if (typeof windSpeed === "number" && windSpeed >= 15)
          alert = "💨 Vent fort !";

        setData({
          temperature: typeof temperature === "number" ? temperature : 0,
          precipitation: typeof precipitation === "number" ? precipitation : 0,
          windSpeed: typeof windSpeed === "number" ? windSpeed : 0,
          alert,
        });
        setError(null);
      } catch (err) {
        console.error("❌ Erreur lors fetch météo:", err);
        setError("Erreur lors de la récupération des données météo");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [lat, lon]);

  return { data, loading, error };
};
