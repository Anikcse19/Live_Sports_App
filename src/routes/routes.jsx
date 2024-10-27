import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Leagues from "../pages/Leagues";
import Sports from "../pages/Sports";
import Casino from "../pages/Casino";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/leagues",
    element: <Leagues />,
  },
  {
    path: "/sports",
    element: <Sports />,
  },
  {
    path: "/casino",
    element: <Casino />,
  },
]);
