import "./AddPlantBtn.css";
import { useNavigate } from "react-router";

function AddPlantBtn() {
  const navigate = useNavigate();

  const navigateToPlantList = () => {
    navigate("/garden/plant-list");
  };

  return (
    <button
      type="button"
      className="add-plant-btn"
      onClick={navigateToPlantList}
    >
      +
    </button>
  );
}

export default AddPlantBtn;
