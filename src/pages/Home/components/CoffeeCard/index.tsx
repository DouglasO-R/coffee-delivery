import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { ActionsContainer, CartButtonContainer, CoffeeCardWrapper, CoffeeFooterContainer, CounterContainer, TagsContainer } from "./style";

export function CoffeeCard() {
    return (
        <CoffeeCardWrapper>
            <img src="" alt="" />

            <TagsContainer>
                <span>especial</span>
                <span>alcoólico</span>
                <span>gelado</span>

            </TagsContainer>

            <TitleText size="s" weight={700} color="subtitle">Expresso Tradicional</TitleText>
            <RegularText size="s" weight={400} color="subtitle">O tradicional café feito com água quente e grãos moídos</RegularText>

            <CoffeeFooterContainer>
                <div>
                    <RegularText size="s" weight={400} color="text">R$</RegularText>
                    <TitleText size="m" weight={800} color="text">9,90</TitleText>
                </div>

                <ActionsContainer>
                    <CounterContainer>
                        <button><Minus size={14} weight="bold"/></button>
                        <span>10</span>
                        <button><Plus size={14} weight="bold"/></button>
                    </CounterContainer>

                    <CartButtonContainer>
                        <ShoppingCart size={22} weight="fill"/>
                    </CartButtonContainer>
                </ActionsContainer>
            </CoffeeFooterContainer>
        </CoffeeCardWrapper>
    )
}