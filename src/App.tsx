import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./context/CartContext";
import { router } from "./router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>


    </ThemeProvider>
  )
}

export default App
