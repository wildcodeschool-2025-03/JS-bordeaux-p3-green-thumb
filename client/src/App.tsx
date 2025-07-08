import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <>
      <Landing />
      <Outlet />
      <Navbar />
    </>
  );
}

export default App;
