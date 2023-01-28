import { NavLink } from "react-router-dom";
import { MapPin, Moon, ShoppingCart, Sun } from "phosphor-react";

import { ActionsContainer, CartButton, HeaderContainer, LocationLabel, ThemeButton } from "./styles";
import { RegularText } from "../RegularText";
import Logo from "../../assets/Logo.svg";

import { useCart } from "../../hooks/useCart";
import { useToggleTheme } from "../../hooks/useToggleTheme";



export function Header() {
    const { cartQuantity } = useCart();
    const { theme, toggleTheme } = useToggleTheme()

    function handleToggleTheme() {
        toggleTheme();
    }

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={Logo} alt="" />
            </NavLink>
            <ActionsContainer>
                <LocationLabel>
                    <MapPin size={22} weight="fill" />
                    <RegularText size="s" color="text" weight="400">
                        Rio de Janeiro,RJ
                    </RegularText>
                </LocationLabel>

                <NavLink to="/checkOut">
                    <CartButton>
                        <ShoppingCart size={22} weight="fill" />
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                    </CartButton>
                </NavLink>

                <ThemeButton onClick={handleToggleTheme}>
                    {theme === "default" ? <Sun size={24} /> : <Moon size={24} />}
                </ThemeButton>
            </ActionsContainer>
        </HeaderContainer>
    )
}