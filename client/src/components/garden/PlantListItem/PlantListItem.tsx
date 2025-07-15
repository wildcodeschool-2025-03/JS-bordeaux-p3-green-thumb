import type { PlantListItem } from "../../../types/garden/plant";
import "./PlantListItem.css";

function PlantListItems({ plant, quantity, onAdd, onRemove }: PlantListItem) {
  return (
    <div className={`plant-list-item ${quantity > 0 ? "selected" : ""}`}>
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

export default PlantListItems;
