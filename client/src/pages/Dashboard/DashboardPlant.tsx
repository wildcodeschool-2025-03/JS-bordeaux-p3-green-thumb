import "./DashboardPlant.css";
import geraniumone from "/images/user-images/geranium-one.jpg";

type DashboardPlantProps = {
  icon: string;
  name: string;
  nickname?: string | null;
  onClick: () => void;
};

function DashboardPlant({
  icon,
  name,
  nickname,
  onClick,
}: DashboardPlantProps) {
  const imageSrc = name === "Geranium" ? geraniumone : icon;

  return (
    <button type="button" className="dashboard-plant-button" onClick={onClick}>
      <img src={imageSrc} alt={name} className="plant-icon" />

      <section className="dashboard-plant-infos">
        <h3>{nickname || name}</h3>
        <p className="need-water-line">💧</p>
      </section>
    </button>
  );
}

export default DashboardPlant;
