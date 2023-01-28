import { createContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { darkTheme } from "../styles/themes/dark";
import { defaultTheme } from "../styles/themes/default";

type Themes = "default" | "dark";

interface ToggleThemeContextType {
    theme: Themes
    toggleTheme: () => void
}

export const ToggleThemeContext = createContext({} as ToggleThemeContextType);

interface ThemeContextProviderProps {
    children: ReactNode;

}

const COFFEE_THEME = "COFFEE_DELIVERY_THEME";

export function ToggleThemeContextProvider({ children }: ThemeContextProviderProps) {
    const [theme, setTheme] = useState<Themes>("default");

    function toggleTheme() {
        const themeNow = theme === "default" ? "dark" : "default"
        setTheme(themeNow)
    }

    return (
        <ToggleThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProvider theme={theme === "default" ? defaultTheme : darkTheme}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ToggleThemeContext.Provider>
    )

}