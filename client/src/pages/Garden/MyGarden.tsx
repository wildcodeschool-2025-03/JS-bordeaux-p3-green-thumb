import { useEffect, useState } from "react";
import PlantCard from "../../components/PlantCard/PlantCard";
import "../../styles/MyGarden.css";
import "../../styles/_variables.css";
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
    fetch("/api/plant_garden")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="my-garden">
      <div className="header" />
      <h1>My Garden 🌿</h1>
      {error && <p className="error">Erreur : {error}</p>}
      {plants.length === 0 ? (
        <div>
          <p>Add your first plant !</p>
          <button className="btn" type="button">
            Add Plants
          </button>
        </div>
      ) : (
        <div className="plant-list">
          {plants.map((plant) => (
            <PlantCard key={plant.id} {...plant} />
          ))}
        </div>
      )}

      <button type="button" className="btn cemetery-btn">
        Cemetery
      </button>
    </div>
  );
}
