import { createBrowserRouter } from "react-router";
import App from "./App";
import MyGarden from "./pages/garden/MyGarden";
import PlantProfile from "./pages/garden/Plant";
import PlantList from "./pages/garden/PlantList";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "garden/:gardenId",
        element: <MyGarden />,
      },
      {
        path: "garden/:gardenId/plant-list",
        element: <PlantList />,
      },
      {
        path: "/garden/:gardenId/plant/:plantId",
        element: <PlantProfile />,
      },
    ],
  },
]);
export default router;
