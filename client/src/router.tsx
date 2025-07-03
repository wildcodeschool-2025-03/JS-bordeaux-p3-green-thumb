import { createBrowserRouter } from "react-router";
import App from "./App";
import PlantProfile from "./pages/garden/Plant";
import Register from "./pages/register/Register";
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
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
