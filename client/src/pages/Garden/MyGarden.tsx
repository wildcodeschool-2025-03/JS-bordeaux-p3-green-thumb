import { useEffect, useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import "../../styles/MyGarden.css";
import cemetry from "../../assets/images/icons/cemetery.png";

type Plant = {
  id: number;
  name: string;
  type: string;
  image: string;
  last_watered: string | null;
};

export default function MyGarden() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/plant_garden", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="my-garden">
      <div className="garden-header">
        <hr className="green-line" />
      </div>

      <article className="garden-box">
        <div className="garden-title-row">
          <h1>My Garden 🌿</h1>
          <button type="button" className="btn cemetery-btn">
            <img src={cemetry} alt="Cemetery Icon" />
          </button>
        </div>
        {error && <p className="error">Erreur : {error}</p>}
        {plants.length === 0 ? (
          <div>
            <p>Add your first plant !</p>
            <button className="btn" type="button">
              Add Plants
            </button>
          </div>
        ) : (
          <div className="plant-cards-container">
            {plants.map((plant) => (
              <PlantCard key={plant.id} {...plant} />
            ))}
          </div>
        )}
      </article>
    </section>
  );
}
