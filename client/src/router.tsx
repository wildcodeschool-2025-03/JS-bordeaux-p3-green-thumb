import { createBrowserRouter } from "react-router";
import App from "./App";
import PrivateRouteContext from "./context/PrivateRouteContext";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyGarden from "./pages/garden/MyGarden";
import PlantProfile from "./pages/garden/Plant";
import PlantList from "./pages/garden/PlantList";
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Tutorial from "./pages/tutorial/Tutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRouteContext>
            <Dashboard />
          </PrivateRouteContext>
        ),
      },
      {
        path: "garden/:Id",
        element: (
          <PrivateRouteContext>
            <MyGarden />
          </PrivateRouteContext>
        ),
      },
      {
        path: "garden/:id/plant-list",
        element: (
          <PrivateRouteContext>
            <PlantList />
          </PrivateRouteContext>
        ),
      },
      {
        path: "/garden/:gardenId/plant/:plantId",
        element: (
          <PrivateRouteContext>
            <PlantProfile />
          </PrivateRouteContext>
        ),
      },
      {
        path: "/tutorial",
        element: (
          <PrivateRouteContext>
            <Tutorial />
          </PrivateRouteContext>
        ),
      },
    ],
  },
]);
export default router;
