import "./DashboardPlant.css";

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
  return (
    <button
      className="dashboard-plant-button"
      type="button"
      onClick={onClick}
      aria-label={`Arroser ${nickname || name}`}
    >
      <img src={icon} alt={name} className="plant-icon" />
      <h3>{nickname || name}</h3>
      <p>💧 À arroser</p>
    </button>
  );
}

export default DashboardPlant;
