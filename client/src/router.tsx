import { createBrowserRouter } from "react-router";
import App from "./App";
import MyGarden from "./pages/garden/MyGarden";
import PlantProfile from "./pages/garden/Plant";
import PlantList from "./pages/garden/PlantList";
import Landing from "./pages/landingtest/Landing";
import Tutorial from "./pages/tutorial/Tutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    element: <App />,
    children: [
      {
        path: "garden/:id",
        element: <MyGarden />,
      },
      {
        path: "garden/:id/plant-list",
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
    ],
  },
]);
export default router;
