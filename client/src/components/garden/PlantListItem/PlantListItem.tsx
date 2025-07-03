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
      <img src={plant.icon} alt={plant.name} className="plant-img" />

      <span className="plant-item-name">{plant.name}</span>

      <div className="plant-controls">
        <button type="button" onClick={onRemove}>
          −
        </button>
        <span className="plant-quantity">{quantity}</span>
        <button type="button" onClick={onAdd}>
          +
        </button>
      </div>
    </div>
  );
}

export default PlantListItem;
