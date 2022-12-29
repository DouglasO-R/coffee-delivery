import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { ConfirmButton,  Divider,  MoneyInfoContainer, SelectedCoffeesContainer, SelectedCoffeesWrapper } from "./style";

import { NavLink } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";
import { SelectedCoffeeCard } from "../SelectedCoffeeCard";
import React from "react";

export function SelectedCoffees() {
    const { cartItems, cartItemsTotal, } = useCart();
    const entrega = 9.90;
    const total = entrega + cartItemsTotal;
    const formatedTotal = total.toLocaleString("pt-BR", { minimumFractionDigits: 2 });




    return (
        <SelectedCoffeesWrapper>
            <TitleText size="xs" weight={700} color="subtitle">Cafés selecionados</TitleText>

            <SelectedCoffeesContainer>
                {cartItems.map((item) => (
                    <React.Fragment key={item.id} >
                         <SelectedCoffeeCard coffee={item} />
                         <Divider />
                    </React.Fragment>
                   
                ))}


                <MoneyInfoContainer>
                    <div>
                        <RegularText size="s" weight={400} color="text">Total de itens</RegularText>
                        <RegularText size="s" weight={400} color="text">R${cartItemsTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</RegularText>

                    </div>
                    <div>
                        <RegularText size="s" weight={400} color="text">Entrega</RegularText>
                        <RegularText size="s" weight={400} color="text">R$9,99</RegularText>
                    </div>
                    <div>
                        <RegularText size="l" weight={700} color="text">Total</RegularText>
                        <RegularText size="l" weight={700} color="text">R${formatedTotal}</RegularText>
                    </div>

                </MoneyInfoContainer>

                <NavLink to="/success">
                    <ConfirmButton>confirmar pedido</ConfirmButton>
                </NavLink>
            </SelectedCoffeesContainer>


        </SelectedCoffeesWrapper>
    )
}