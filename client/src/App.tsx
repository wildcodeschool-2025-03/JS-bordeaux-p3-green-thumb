import { Outlet } from "react-router";
import "./App.css";
import Weather from "./components/meteo/Weather";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Weather />
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
