import { createBrowserRouter } from "react-router";
import App from "./App";
import MyGarden from "./pages/garden/MyGarden";
import PlantProfile from "./pages/garden/Plant";
import PlantList from "./pages/garden/PlantList";
import Register from "./pages/register/Register";
import Tutorial from "./pages/tutorial/Tutorial";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "garden/:Id",
        element: <MyGarden />,
      },
      {
        path: "garden/:Id/plant-list",
        element: <PlantList />,
      },
      {
        path: "/garden/:gardenId/plant/:plantId",
        element: <PlantProfile />,
      },
      {
        path: "/tutorial",
        element: <Tutorial />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
