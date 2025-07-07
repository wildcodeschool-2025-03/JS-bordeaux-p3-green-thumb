import "./AddPlantBtn.css";
import { useNavigate, useParams } from "react-router";

function AddPlantBtn() {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToPlantList = () => {
    if (!id) return;
    navigate(`/garden/${id}/plant-list`);
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
