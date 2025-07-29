import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import gardenOn from "../../../public/images/navbar-icon/mygardenon.svg";
import tutorialOn from "../../../public/images/navbar-icon/tutorialon.svg";
import { useFetchWithAuth } from "../../tools/useFetchWithAuth";
import type { PlantDashboard } from "../../types/garden/plant";
import DashboardPlant from "./DashboardPlant";

import "./Dashboard.css";
import Weather from "../../components/meteo/Weather";

export default function Dashboard() {
  const { id } = useParams();
  const [plantsToWater, setPlantsToWater] = useState<PlantDashboard[]>([]);
  const [loading, setLoading] = useState(true);
  const authFetch = useFetchWithAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlantsToWater = () => {
      if (!id) return;

      setLoading(true);
      authFetch(
        `${import.meta.env.VITE_API_URL}/plant_garden/${Number(id)}/watering`,
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPlantsToWater(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching plants to water:", error);
          setLoading(false);
        });
    };

    fetchPlantsToWater();
  }, [id, authFetch]);

  const waterPlant = async (plantGardenId: number) => {
    try {
      const res = await authFetch(
        `${import.meta.env.VITE_API_URL}/plant_garden/${plantGardenId}/water`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
        },
      );

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Erreur lors de l'arrosage : ${errorText}`);
      }

      setPlantsToWater((prev) =>
        prev.filter((plant) => plant.plant_garden_id !== plantGardenId),
      );
    } catch (error) {
      console.error("Erreur fetch waterPlant :", error);
    }
  };

  if (loading) return <p>Chargement...</p>;
  if (plantsToWater.length === 0)
    return (
      <>
        <Weather />
        <div className="intro-greenthumb">
          <h2 className="empty-todo">No plants to water today</h2>
          <h3 className="prompt-to-navigate">
            You can add new plants to your garden or go and check our gardening
            tutorials
          </h3>
          <div className="navigation-icons">
            <img
              src={gardenOn}
              alt="garden navigation link"
              onClick={() => navigate(`/garden/${id}`)}
              onKeyDown={() => navigate(`/garden/${id}`)}
              className="garden-navigation"
            />
            <img
              src={tutorialOn}
              alt="garden navigation link"
              onClick={() => navigate(`/tutorial/${id}`)}
              onKeyDown={() => navigate(`/tutorial/${id}`)}
              className="garden-navigation"
            />
          </div>
        </div>
      </>
    );

  return (
    <>
      <section className="dashboard-desktop-box">
        <Weather />
        <section className="plants-to-water-container">
          <article className="water-card">
            {plantsToWater.map((plant) => (
              <DashboardPlant
                key={plant.plant_garden_id}
                icon={plant.icon}
                name={plant.name}
                nickname={plant.nickname}
                onClick={() => waterPlant(plant.plant_garden_id)}
              />
            ))}
          </article>
        </section>
      </section>
    </>
  );
}
