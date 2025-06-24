import { createBrowserRouter } from "react-router";
import App from "./App";
import PlantProfile from "./pages/garden/Plant";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/garden/:gardenId/plant/:plantId",
        element: <PlantProfile />,
      },
    ],
  },
]);

export default router;
