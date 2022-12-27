import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CheckOutOrder } from "./pages/CheckOutOrder";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

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
        element: <CheckOutOrder />
      },
      {
        path: "/success",
        element: <Success />
      }
    ]
  },

]);