import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { ActionsContainer, CartButton, HeaderContainer, LocationLabel } from "./styles";
import { RegularText } from "../RegularText";
import Logo from "../../assets/Logo.svg";

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="/home">
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