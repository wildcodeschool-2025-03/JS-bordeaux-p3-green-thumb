import { useEffect } from "react";
import type { FC } from "react";
import toast from "react-hot-toast";
import { useGeolocation } from "../../hooks/useGeolocalisation";
import { useWeather } from "../../hooks/useWeather";
export const WeatherAlertToaster: FC = () => {
  const { position } = useGeolocation();
  const { data } = useWeather(position?.lat ?? 0, position?.lon ?? 0);

  useEffect(() => {
    if (data?.alert) {
      toast.error(data.alert, {
        icon: "⚠️",
        duration: 8000,
      });
    }
  }, [data?.alert]);

  return null;
};
