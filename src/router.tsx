import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
      children: [
            {
                path: "/home",
                element: <div>OLa HOME</ div >
        },
    {
        path: "/checkOut",
        element: <div>OLa checkOut</ div >
        }
      ]
    },
    
  ]);