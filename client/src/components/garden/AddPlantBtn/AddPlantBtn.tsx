import "./AddPlantBtn.css";
import { useNavigate, useParams } from "react-router";

function AddPlantBtn() {
  const navigate = useNavigate();
  const { Id } = useParams();

  const navigateToPlantList = () => {
    if (!Id) return;
    navigate(`/garden/${Id}/plant-list`);
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
