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
      <h2 className="plant-name">{name}</h2>
      <p className="plant-type">{type}</p>
      {last_watered ? (
        <p className="last-watered">Last watered: {last_watered}</p>
      ) : (
        <p className="last-watered">Not watered yet</p>
      )}
    </div>
  );
}
