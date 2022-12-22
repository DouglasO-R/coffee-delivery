import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children:[
      {
        path: "/home",
        element: <div>OLa HOME</div>
      },
      {
        path: "/checkOut",
        element: <div>OLa checkOut</div>
      }
    ]
  },
  
])


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />

    </ThemeProvider>
  )
}

export default App
