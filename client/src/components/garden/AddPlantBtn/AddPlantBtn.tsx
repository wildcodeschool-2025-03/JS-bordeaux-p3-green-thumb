import "./AddPlantBtn.css";
import { useNavigate, useParams } from "react-router";

type Props = {
  isFloating: boolean;
};

function AddPlantBtn({ isFloating }: Props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const navigateToPlantList = () => {
    if (!id) return;
    navigate(`/garden/${id}/plant-list`);
  };

  return (
    <button
      type="button"
      className={`add-plant-btn ${isFloating ? "floating" : "static"}`}
      onClick={navigateToPlantList}
    >
      +
    </button>
  );
}

export default AddPlantBtn;
