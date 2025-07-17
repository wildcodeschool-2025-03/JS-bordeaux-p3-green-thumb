import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./styles/_variables.css";
import { UserProvider } from "./context/UserContext";
import router from "./router";

const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>,
);
