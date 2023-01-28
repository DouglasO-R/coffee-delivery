import { RouterProvider } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import { ToggleThemeContextProvider } from "./context/ToggleThemeContext";
import { router } from "./router";




function App() {
  

  return (
    <ToggleThemeContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
    </ToggleThemeContextProvider>
  )
}

export default App
