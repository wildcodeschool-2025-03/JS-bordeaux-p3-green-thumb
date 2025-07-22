import "./Navbar.css";
import { NavLink } from "react-router";
import dashboardoff from "/images/navbar-icon/dashboardoff.svg";
import dashboardon from "/images/navbar-icon/dashboardon.svg";
import doctoroff from "/images/navbar-icon/doctoroff.svg";
import doctoron from "/images/navbar-icon/doctoron.svg";
import mygardenoff from "/images/navbar-icon/mygardenoff.svg";
import mygardenon from "/images/navbar-icon/mygardenon.svg";
import photofeedoff from "/images/navbar-icon/photofeedoff.svg";
import photofeedon from "/images/navbar-icon/photofeedon.svg";
import tutorialoff from "/images/navbar-icon/tutorialoff.svg";
import tutorialon from "/images/navbar-icon/tutorialon.svg";
import { useUserContext } from "../../context/UserContext";

export default function Navbar() {
  const { user } = useUserContext();
  const id = user?.infoUser?.id;

  return (
    <nav className="menu-nav">
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

      <NavLink to="/garden/1/plant/28" className="nav-item">
        {({ isActive }) => (
          <>
            <img
              src={isActive ? photofeedon : photofeedoff}
              alt="photofeed icon"
              className="nav-icon"
            />
            <p className={`nav-text ${isActive ? "active" : ""}`}>Photofeed</p>
          </>
        )}
      </NavLink>

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
    </nav>
  );
}
