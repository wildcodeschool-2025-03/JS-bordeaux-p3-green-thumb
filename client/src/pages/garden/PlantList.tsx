import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PlantListItem from "../../components/garden/PlantListItem/PlantListItem";
import "./plantList.css";
import type { Plant } from "../../types/garden/plant";

function PlantList() {
  const [plants, setPlants] = useState<Plant[]>([]);

  const [selectedPlants, setSelectedPlants] = useState<{
    [id: number]: number;
  }>({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemByPage = 9;
  const totalPages = Math.ceil(plants.length / itemByPage);
  const startIndex = (currentPage - 1) * itemByPage;
  const endIndex = startIndex + itemByPage;
  const paginatedData = plants.slice(startIndex, endIndex);

  const { Id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/plant`)
      .then((res) => res.json())
      .then((plants) => setPlants(plants))
      .catch((err) => console.error("Error while fetching plants:", err));
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
    fetch(`http://localhost:3310/plant_garden/${Id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPlants),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to submit plant selection");
        }
        return res.json();
      })
      .then(() => {
        navigate(`/garden/${Id}/`);
      })
      .catch((err) => {
        console.error("Error during submission:", err);
      });
  };

  return (
    <>
      <div className="desktop-box">
        <section className="plant-list">
          <article className="plant-grid">
            {paginatedData.map((plant) => (
              <PlantListItem
                key={plant.id}
                plant={plant}
                quantity={selectedPlants[plant.id] || 0}
                onAdd={() => incrementPlant(plant.id)}
                onRemove={() => decrementPlant(plant.id)}
              />
            ))}
          </article>

          <div className="pagination-bar">
            <section>
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
            </section>
            <button type="button" onClick={submitPlantSelection}>
              ADD
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default PlantList;
