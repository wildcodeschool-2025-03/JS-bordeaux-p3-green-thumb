import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Outlet />
        <Navbar />
      </UserProvider>
    </>
  );
}

export default App;
