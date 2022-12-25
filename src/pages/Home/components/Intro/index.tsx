import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { IntroContentContainer, IntroWrapper, ItemContainer, ItemsContainer, TitleContainer } from "./styles";

import Img from "../../assets/Imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


export function Intro() {
    return (
        <IntroWrapper>
            <IntroContentContainer>
                <div>
                    <TitleContainer>
                        <TitleText size="xl" weight={800} color="title">Encontre o café perfeito para qualquer hora do dia</TitleText>
                        <RegularText size="l" color="subtitle" weight="400">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</RegularText>
                    </TitleContainer>

                    <ItemsContainer>
                        <ItemContainer variant="primary">
                            <span> <ShoppingCart weight="fill" size={16}/> </span>
                            <RegularText size="m" color="text" weight="400">Compra simples e segura</RegularText>
                        </ItemContainer>

                        <ItemContainer variant="tertiary">
                            <span> <Package weight="fill" size={16}/> </span>
                            <RegularText size="m" color="text" weight="400">Embalagem mantém o café intacto</RegularText>
                        </ItemContainer>

                        <ItemContainer variant="secondary">
                            <span> <Timer weight="fill" size={16}/> </span>
                            <RegularText size="m" color="text" weight="400">Entrega rápida e rastreada</RegularText>
                        </ItemContainer>

                        <ItemContainer variant="quaternary">
                            <span> <Coffee weight="fill" size={16}/> </span>
                            <RegularText size="m" color="text" weight="400">O café chega fresquinho até você</RegularText>
                        </ItemContainer>
                    </ItemsContainer>
                </div>

                <img src={Img} alt="" />

            </IntroContentContainer>
        </IntroWrapper>
    )
}