import { useEffect, useState } from "react";
import PlantListItem from "../../components/garden/PlantListItem/PlantListItem";
import "./plantList.css";

type Plant = {
  id: number;
  name: string;
  icon: string;
  description: string;
  plant_exposition: string;
  sowing?: string | null;
  watering: number;
  harvesting?: string | null;
  toxic?: boolean;
  edible?: boolean;
};

function PlantList() {
  const [data, setData] = useState<Plant[]>([]);
  const [selectedPlants, setSelectedPlants] = useState<{
    [id: number]: number;
  }>({});

  const incrementPlant = (id: number) => {
    setSelectedPlants((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrementPlant = (id: number) => {
    setSelectedPlants((prev) => {
      const current = prev[id] || 0;
      if (current <= 1) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: current - 1 };
    });
  };

  useEffect(() => {
    fetch("http://localhost:3310/api/plant")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur lors du fetch :", err));
  }, []);

  const handleSubmit = () => {
    fetch("http://localhost:3310/api/selection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPlants),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Échec de l'envoi");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Réponse du serveur :", data);
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi :", err);
      });
  };

  return (
    <>
      <div className="plant-list">
        {data.map((plant) => (
          <PlantListItem
            key={plant.id}
            plant={plant}
            quantity={selectedPlants[plant.id] || 0}
            onAdd={() => incrementPlant(plant.id)}
            onRemove={() => decrementPlant(plant.id)}
          />
        ))}
      </div>

      <div className="pagination-bar">
        <div>
          <button type="button">{"<"}</button>
          <span className="page-current">1</span>
          <span>of 4 </span>
          <button type="button">{">"}</button>
        </div>
        <button type="button" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </>
  );
}

export default PlantList;
