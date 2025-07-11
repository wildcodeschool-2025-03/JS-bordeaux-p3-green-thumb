import "./PlantCard.css";
import type { PlantCardProps } from "../../../types/garden/plant";

export default function PlantCard({ plant }: PlantCardProps) {
  const [d, m, y] = plant.born_at.split(".");
  const formattedDate = new Date(+y, +m - 1, +d).toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="plant-card">
      <div className="plant-image-wrapper">
        <img src={plant.icon} alt={plant.name} className="plant-image" />
      </div>

      <div className="plant-info">
        <div className="info-line">
          <img
            src="/images/plant-icon/user.svg"
            alt="plant-name"
            className="info-icon"
          />
          <span>{plant.nickname || plant.name}</span>
        </div>

        <div className="info-line">
          <img
            src="/images/plant-icon/calendrier.png"
            alt="plant-date"
            className="info-icon"
          />
          <span>{formattedDate}</span>
        </div>

        <div className="info-line">
          <img
            src="/images/plant-icon/toxic.png"
            alt=""
            className="info-icon"
          />
          <span>{plant.toxic ? "Toxic" : "Harmless"}</span>
        </div>
      </div>
    </div>
  );
}
