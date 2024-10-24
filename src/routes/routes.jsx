import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Leagues from "../pages/Leagues";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/leagues",
    element: <Leagues />,
  },
]);
