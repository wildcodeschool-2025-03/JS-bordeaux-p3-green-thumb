import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddPlantBtn from "../../components/garden/AddPlantBtn/AddPlantBtn";
import PlantCard from "../../components/garden/PlantCard/PlantCard";
import type { Plant } from "../../types/garden/plant";
import "./myGarden.css";
import { useFetchWithAuth } from "../../tools/useFetchWithAuth";

function MyGarden() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const { id } = useParams();
  const authFetch = useFetchWithAuth();

  useEffect(() => {
    if (!id) return;

    authFetch(`${import.meta.env.VITE_API_URL}/api/garden/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPlants(data);
        } else if (Array.isArray(data.plants)) {
          setPlants(data.plants);
        } else {
          console.error("Unexpected API format:", data);
          setPlants([]);
        }
      })
      .catch((err) => console.error("Error while fetching plants:", err));
  }, [id, authFetch]);

  return (
    <>
      <div className="desktop-box">
        <section className="my-garden">
          {plants.length === 0 ? (
            <p className="empty-message">Ajoute ta première plante !</p>
          ) : (
            <article className="garden-plants">
              {plants.map((plant) => (
                <PlantCard key={plant.plant_garden_id} plant={plant} />
              ))}
            </article>
          )}
        </section>
        <AddPlantBtn />
      </div>
    </>
  );
}
export default MyGarden;
