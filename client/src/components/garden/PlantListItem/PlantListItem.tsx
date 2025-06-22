import "./PlantListItem.css";

type Props = {
  plant: {
    name: string;
    icon: string;
  };
  quantity: number;
  onAdd: () => void;
  onRemove: () => void;
};

function PlantListItem({ plant, quantity, onAdd, onRemove }: Props) {
  return (
    <div className={`plant-card ${quantity > 0 ? "selected" : ""}`}>
      <div className="plant-top">
        <span className="plant-quantity">{quantity}</span>
      </div>

      <img src={plant.icon} alt={plant.name} className="plant-img" />

      <span className="plant-name">{plant.name}</span>

      <div className="plant-controls">
        <button type="button" className="btn" onClick={onRemove}>
          −
        </button>
        <button type="button" className="btn" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
}

export default PlantListItem;
