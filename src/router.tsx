import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/checkOut",
        element: <div>OLa checkOut</ div >
      }
    ]
  },

]);