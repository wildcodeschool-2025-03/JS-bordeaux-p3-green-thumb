import { createBrowserRouter } from "react-router";
import App from "./App";
import MyGarden from "./pages/Garden/MyGarden";
import PlantProfile from "./pages/Garden/Plant";
import Tutorial from "./pages/tutorial/Tutorial";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
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
    ],
  },
]);

export default router;
