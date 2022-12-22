import { ThemeProvider } from "styled-components";
import { TitleText } from "./components/TitleText";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TitleText size="m" color="subtitle" weight="400">
        OLa mundo
      </TitleText>
    </ThemeProvider>
  )
}

export default App
