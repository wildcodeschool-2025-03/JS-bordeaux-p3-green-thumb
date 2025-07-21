import "./Navbar.css";
import { NavLink } from "react-router";
import dashboardoff from "../../assets/images/navbar/dashboardoff.svg";
import dashboardon from "../../assets/images/navbar/dashboardon.svg";
import doctoroff from "../../assets/images/navbar/doctoroff.svg";
import doctoron from "../../assets/images/navbar/doctoron.svg";
import mygardenoff from "../../assets/images/navbar/mygardenoff.svg";
import mygardenon from "../../assets/images/navbar/mygardenon.svg";
import photofeedoff from "../../assets/images/navbar/photofeedoff.svg";
import tutorialoff from "../../assets/images/navbar/tutorialoff.svg";
import tutorialon from "../../assets/images/navbar/tutorialon.svg";
import { useUserContext } from "../../context/UserContext";

export default function Navbar() {
  const { user } = useUserContext();
  const id = user?.infoUser?.id;

  return (
    <nav className="menu-nav">
      <NavLink to={`/garden/${id}`} className="nav-item">
        {({ isActive }) => (
          <>
            <img
              src={isActive ? mygardenon : mygardenoff}
              alt="my garden icon"
              className="nav-icon"
            />
            <p className={`nav-text ${isActive ? "active" : ""}`}>My Garden</p>
          </>
        )}
      </NavLink>

      <NavLink to="/plantdoctor" className="nav-item">
        {({ isActive }) => (
          <>
            <img
              src={isActive ? doctoron : doctoroff}
              alt="plant doctor icon"
              className="nav-icon"
            />
            <p className={`nav-text ${isActive ? "active" : ""}`}>
              Doctor'Plant
            </p>
          </>
        )}
      </NavLink>

      <NavLink to="/dashboard" className="nav-item">
        {({ isActive }) => (
          <>
            <img
              src={isActive ? dashboardon : dashboardoff}
              alt="dashboard icon"
              className="nav-icon"
            />
            <p className={`nav-text ${isActive ? "active" : ""}`}>Dashboard</p>
          </>
        )}
      </NavLink>

      <NavLink to="/tutorial" className="nav-item">
        {({ isActive }) => (
          <>
            <img
              src={isActive ? tutorialon : tutorialoff}
              alt="tutorial video icon"
              className="nav-icon"
            />
            <p className={`nav-text ${isActive ? "active" : ""}`}>Tutorials</p>
          </>
        )}
      </NavLink>

      <nav className="nav-item">
        <>
          <img src={photofeedoff} alt="photofeed icon" className="nav-icon" />
          <p className="nav-text">Photofeed</p>
        </>
      </nav>
    </nav>
  );
}
