import { createBrowserRouter } from "react-router";
import App from "./App";
import MyGarden from "./pages/Garden/MyGarden";
import PlantProfile from "./pages/Garden/Plant";
import PlantList from "./pages/Garden/PlantList";
import Tutorial from "./pages/tutorial/Tutorial";

import Cemetery from "./pages/cemetery/Cemetery";

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
        path: "/garden",
        element: <MyGarden />,
      },
      {
        path: "/cemetery",
        element: <Cemetery />,
      },
    ],
  },
]);
export default router;
