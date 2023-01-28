import { useContext } from "react";
import { ToggleThemeContext } from "../context/ToggleThemeContext";


export function useToggleTheme(){
    const context = useContext(ToggleThemeContext);
    return context;
}