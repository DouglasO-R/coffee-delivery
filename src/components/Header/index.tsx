import { NavLink } from "react-router-dom";
import { ActionsContainer, CartButton, HeaderContainer, LocationLabel } from "./styles";

import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { RegularText } from "../RegularText";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={Logo} alt="" />
            </NavLink>

            <ActionsContainer>
                <LocationLabel>
                    <MapPin weight="fill" />
                    <RegularText size="s" color="text" weight="400">
                        Rio de Janeiro,RJ
                    </RegularText>
                </LocationLabel>

                <NavLink to="/checkOut">
                    <CartButton>
                        <ShoppingCart size={22} weight="fill"/>
                        <span>3</span>
                    </CartButton>
                </NavLink>
            </ActionsContainer>
        </HeaderContainer>
    )
}