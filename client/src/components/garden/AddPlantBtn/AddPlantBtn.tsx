import "./AddPlantBtn.css";
import { useNavigate, useParams } from "react-router";

function AddPlantBtn() {
  const navigate = useNavigate();
  const { gardenId } = useParams();

  const navigateToPlantList = () => {
    if (!gardenId) return;
    navigate(`/garden/${gardenId}/plant-list`);
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
