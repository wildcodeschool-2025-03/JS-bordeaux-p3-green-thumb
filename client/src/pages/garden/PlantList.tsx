import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
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
  const [currentPage, setCurrentPage] = useState(1);
  const itemByPage = 9;

  const totalPages = Math.ceil(data.length / itemByPage);
  const startIndex = (currentPage - 1) * itemByPage;
  const endIndex = startIndex + itemByPage;
  const paginatedData = data.slice(startIndex, endIndex);
  const { gardenId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3310/api/plant")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur lors du fetch :", err));
  }, []);

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

  const submitPlantSelection = () => {
    fetch(`http://localhost:3310/plant_garden/${gardenId}`, {
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
        navigate(`/garden/${gardenId}/`);
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi :", err);
      });

    console.log("Données envoyées :", JSON.stringify(selectedPlants));
  };

  return (
    <>
      <div className="plant-list">
        <div className="plant-grid">
          {paginatedData.map((plant) => (
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
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              {"<"}
            </button>
            <span>
              {" "}
              {currentPage} of {totalPages}{" "}
            </span>
            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              {">"}
            </button>
          </div>
          <button type="button" onClick={submitPlantSelection}>
            ADD
          </button>
        </div>
      </div>
    </>
  );
}

export default PlantList;
