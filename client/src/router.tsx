import { createBrowserRouter } from "react-router";
import App from "./App";
import PrivateRoadContext from "./context/PrivateRoadContext";
import MyGarden from "./pages/garden/MyGarden";
import PlantProfile from "./pages/garden/Plant";
import PlantList from "./pages/garden/PlantList";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "garden/:Id",
        element: (
          <PrivateRoadContext>
            <MyGarden />
          </PrivateRoadContext>
        ),
      },
      {
        path: "garden/:id/plant-list",
        element: (
          <PrivateRoadContext>
            <PlantList />
          </PrivateRoadContext>
        ),
      },
      {
        path: "/garden/:gardenId/plant/:plantId",

        element: (
          <PrivateRoadContext>
            <PlantProfile />
          </PrivateRoadContext>
        ),
      },
      {
        path: "/tutorial",
        element: (
          <PrivateRoadContext>
            <Tutorial />
          </PrivateRoadContext>
        ),
      },
    ],
  },
]);
export default router;
