import { Outlet } from "react-router";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/navbar/Navbar";
import { WeatherAlertToaster } from "./components/weather/WeatherAlertToaster";
import { WeatherCard } from "./components/weather/WeatherCard";

function App() {
  return (
    <>
      <WeatherCard />

      <WeatherAlertToaster />
      <Toaster />
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
