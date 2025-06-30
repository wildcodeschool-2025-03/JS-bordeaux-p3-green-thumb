import "./PlantCard.css";

export default function PlantCard({
  name,
  type,
  image,
  last_watered,
}: {
  name: string;
  type: string;
  image: string;
  last_watered: string | null;
}) {
  return (
    <div className="plant-card">
      <img src={image} alt={name} className="plant-image" />
      <div className="plant-info">
        <h2 className="plant-name">{name}</h2>
        <p className="plant-type">{type}</p>
        <p className="last-watered">
          {last_watered ? `Last watered: ${last_watered}` : "Not watered yet"}
        </p>
      </div>
    </div>
  );
}
