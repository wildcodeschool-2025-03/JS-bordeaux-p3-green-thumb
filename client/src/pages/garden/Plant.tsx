import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Gallery from "../../components/garden/Gallery/Gallery";
import { useFetchWithAuth } from "../../tools/useFetchWithAuth";
import type { Plant } from "../../types/garden/plant";

import "./Plant.css";
import calendar from "/images/app-icon/calendar.svg";
import east from "/images/app-icon/east.png";
import edible from "/images/app-icon/edible.png";
import harmless from "/images/app-icon/harmless.png";
import north from "/images/app-icon/north.png";
import notEdible from "/images/app-icon/not-edible.png";
import pen from "/images/app-icon/pencil.png";
import south from "/images/app-icon/south.png";
import toxic from "/images/app-icon/toxic.png";
import west from "/images/app-icon/west.png";

export default function PlantProfile() {
  const authFetch = useFetchWithAuth();
  const { gardenId, plantId } = useParams();

  const [plant, setPlant] = useState<Plant | null>(null);

  const expositionIcons = {
    north: north,
    south: south,
    east: east,
    west: west,
  };

  const wateringInstructions = (watering: number) => {
    switch (watering) {
      case 1:
        return `Water ${plant?.name} once every two week`;
      case 2:
        return `Water ${plant?.name}  once a week`;
      case 3:
        return `Water ${plant?.name}  every two day`;
    }
  };

  useEffect(() => {
    authFetch(
      `${import.meta.env.VITE_API_URL}/api/garden/${gardenId}/plant/${plantId}`,
    )
      .then((res) => res.json())
      .then((plant) => setPlant(plant));
  }, [gardenId, plantId, authFetch]);

  if (!plant) {
    return <div>Loading...</div>;
  }
  console.log("Fetching plant profile for:", { gardenId, plantId });

  return (
    <>
      <div className="plant-profile-wrapper">
        <section className="plant-photo-gallery ">
          <Gallery />
        </section>

        <section className="plant-profile-card">
          <h3>Plant Profile</h3>
          <hr />
          <h2>
            {plant.name}
            <img src={pen} alt="pencil icon" className="pen-icon" />
          </h2>
          <section className="plant-profile-infos">
            <p>{plant.description}</p>

            <article className="icon-card">
              <div className="birthdate-infos">
                <img
                  src={calendar}
                  alt="calendar icon"
                  className="calendar-icon"
                />
                <span className="birthdate">{plant.born_at}</span>
              </div>

              <div className="icons">
                {plant.edible ? (
                  <img src={edible} alt="edible" className="info-icon" />
                ) : (
                  <img src={notEdible} alt="not edible" className="info-icon" />
                )}
                {plant.toxic ? (
                  <img src={toxic} alt="toxic" className="toxic-icon" />
                ) : (
                  <img
                    src={harmless}
                    alt="harmless"
                    className="harmless-icon"
                  />
                )}
                <img
                  src={
                    expositionIcons[
                      plant.plant_exposition as keyof typeof expositionIcons
                    ]
                  }
                  alt={`exposition ${plant.plant_exposition}`}
                  className="exposition-icon"
                />
              </div>
            </article>
          </section>
        </section>

        <section className="plant-profile-reminder">
          <h3>Reminder</h3>
          <hr />
          <div className="info-wrapper">
            <article className="watering-info">
              <h2>{wateringInstructions(plant.watering)}</h2>
            </article>
            <article className="exposition-info">
              <h2>{plant.tip}</h2>
            </article>
            <h3>Usual cause of decay</h3>

            <article className="alert-info">
              <h2> {plant.main_cause_of_decay}</h2>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
