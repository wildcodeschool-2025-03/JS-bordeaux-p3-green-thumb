import { createBrowserRouter } from "react-router";
import App from "./App";
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
    ],
  },
]);

export default router;
