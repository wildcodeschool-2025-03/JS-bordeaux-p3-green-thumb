import "./PlantCard.css";
import { useNavigate } from "react-router";
import calendar from "/images/app-icon/calendar.svg";
import harmless from "/images/app-icon/harmless.png";
import toxic from "/images/app-icon/toxic.png";
import type { Plant } from "../../../types/garden/plant";

type PlantCardProps = { plant: Plant; gardenId: string };

export default function PlantCard({ plant, gardenId }: PlantCardProps) {
  const navigate = useNavigate();
  const showProfile = () => {
    navigate(`/garden/${gardenId}/plant/${plant.plant_garden_id}`);
  };

  const [d, m, y] = plant.born_at.split(".");
  const formattedDate = new Date(+y, +m - 1, +d).toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="plant-card" onClick={showProfile} onKeyUp={showProfile}>
      <article className="plant-image-wrapper">
        <img src={plant.icon} alt={plant.name} className="plant-image" />
      </article>

      <section className="plant-info">
        <article className="info-line">
          <span>{plant.nickname || plant.name}</span>
        </article>

        <article className="info-line">
          <img src={calendar} alt="plant-date" className="info-icon" />
          <span>{formattedDate}</span>
        </article>

        <article className="info-line">
          <div>
            {plant.toxic ? (
              <img src={toxic} alt="toxic" className="toxic-icon" />
            ) : (
              <img src={harmless} alt="harmless" className="harmless-icon" />
            )}
          </div>
          <span>{plant.toxic ? "Toxic" : "Harmless"}</span>
        </article>
      </section>
    </section>
  );
}
