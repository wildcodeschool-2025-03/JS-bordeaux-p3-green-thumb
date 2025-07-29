import "./Navbar.css";
import { NavLink } from "react-router";
import { useParams } from "react-router";
import dashboardoff from "/images/navbar-icon/dashboardoff.svg";
import dashboardon from "/images/navbar-icon/dashboardon.svg";
import doctoroff from "/images/navbar-icon/doctoroff.svg";
import doctoron from "/images/navbar-icon/doctoron.svg";
import mygardenoff from "/images/navbar-icon/mygardenoff.svg";
import mygardenon from "/images/navbar-icon/mygardenon.svg";
import photofeedoff from "/images/navbar-icon/photofeedoff.svg";
import tutorialoff from "/images/navbar-icon/tutorialoff.svg";
import tutorialon from "/images/navbar-icon/tutorialon.svg";

export default function Navbar() {
  const { id } = useParams();

  if (!id) return null;

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

      <NavLink to={`/plantdoctor/${id}`} className="nav-item">
        {({ isActive }) => (
          <>
            <img
              src={isActive ? doctoron : doctoroff}
              alt="plant doctor icon"
              className="nav-icon"
            />
            <p className={`nav-text ${isActive ? "active" : ""}`}>
              Doctor Plant
            </p>
          </>
        )}
      </NavLink>

      <NavLink to={`/dashboard/${id}/`} className="nav-item">
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

      <NavLink to={`/tutorial/${id}/`} className="nav-item">
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
      <a
        href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
        className="RGPD"
      >
        Mentions Légales
      </a>
    </nav>
  );
}
