import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFetchWithAuth } from "../../tools/useFetchWithAuth";
import type { PlantDashboard } from "../../types/garden/plant";
import DashboardPlant from "./DashboardPlant";
import "./Dashboard.css";

export default function Dashboard() {
  const { id } = useParams();
  const [plantsToWater, setPlantsToWater] = useState<PlantDashboard[]>([]);
  const [loading, setLoading] = useState(true);
  const authFetch = useFetchWithAuth();

  useEffect(() => {
    const fetchPlantsToWater = () => {
      if (!id) return;

      setLoading(true);
      authFetch(
        `${import.meta.env.VITE_API_URL}/plant_garden/${Number(id)}/watering`,
      )
        .then((res) => res.json())
        .then((data) => {
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
  if (plantsToWater.length === 0) return <p>Aucune plante à arroser !</p>;

  return (
    <section className="desktop-box">
      <section className="plants-to-water-container">
        <article>
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
  );
}
