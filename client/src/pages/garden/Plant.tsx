import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Plant } from "../../types/garden/plant";

import "./Plant.css";
import addPhoto from "../../assets/images/icons/add-photo.png";
import calendar from "../../assets/images/icons/calendar.png";
import east from "../../assets/images/icons/east.png";
import edible from "../../assets/images/icons/edible.png";
import harmless from "../../assets/images/icons/harmless.png";
import north from "../../assets/images/icons/north.png";
import notEdible from "../../assets/images/icons/not-edible.png";
import pen from "../../assets/images/icons/pencil.png";
import south from "../../assets/images/icons/south.png";
import toxic from "../../assets/images/icons/toxic.png";
import west from "../../assets/images/icons/west.png";
import { useFetchWithAuth } from "../../hooks/useFetchWithAuth.ts";

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

  return (
    <>
      <div className="desktop-box">
        <section className="profile-card">
          <img src={plant.icon} alt={plant.name} className="plant-icon" />

          <section className="plant-infos">
            <h2 className="plant-name">
              {plant.name}
              <img src={pen} alt="pencil icon" className="pen-icon" />
            </h2>
            <article className="birthdate-wrapper">
              <img
                src={calendar}
                alt="calendar icon"
                className="calendar-icon"
              />
              <span className="birthdate">{plant.born_at}</span>
            </article>
          </section>

          <article className="icon-card">
            {plant.edible ? (
              <img src={edible} alt="edible" className="info-icon" />
            ) : (
              <img src={notEdible} alt="not edible" className="info-icon" />
            )}
            {plant.toxic ? (
              <img src={toxic} alt="toxic" className="toxic-icon" />
            ) : (
              <img src={harmless} alt="harmless" className="harmless-icon" />
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
          </article>

          <article className="gallery">
            <header className="gallery-header">
              <h2 className="gallery-title">Gallery</h2>
              <img src={addPhoto} alt="add icon" className="add-photo-icon" />
            </header>
            <figure className="plant-photo-carousel">
              <img
                src="https://placehold.co/162x162/png"
                alt="gallery placeholder"
                className="mobile-gallery-photo"
              />
              <img
                src="https://placehold.co/240x240/png"
                alt="gallery placeholder"
                className="desktop-gallery-photo"
              />
            </figure>
          </article>
        </section>
      </div>
    </>
  );
}
