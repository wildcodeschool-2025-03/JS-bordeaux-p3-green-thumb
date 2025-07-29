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
    <button
      className="dashboard-plant-button"
      type="button"
      onClick={onClick}
      aria-label={`Water ${nickname || name}`}
    >
      <img src={imageSrc} alt={name} className="plant-icon" />
      <h3>{nickname || name}</h3>
      <p>💧 Water me</p>
    </button>
  );
}

export default DashboardPlant;
