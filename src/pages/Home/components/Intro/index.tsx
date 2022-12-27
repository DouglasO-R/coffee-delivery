import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { IntroContentContainer, IntroWrapper,  ItemsContainer, TitleContainer } from "./styles";

import Img from "../../assets/Imagem.png";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";


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
                        <InfoWithIcon
                            icon={<ShoppingCart weight="fill" size={16} />}
                            variant="primary"
                            text={
                                <RegularText size="m" color="text" weight="400">Compra simples e segura</RegularText>
                            }
                        />

                        <InfoWithIcon
                            icon={<Package weight="fill" size={16} />}
                            variant="tertiary"
                            text={
                                <RegularText size="m" color="text" weight="400">Embalagem mantém o café intacto</RegularText>
                            }
                        />

                        <InfoWithIcon
                            icon={<Timer weight="fill" size={16} />}
                            variant="secondary"
                            text={
                                <RegularText size="m" color="text" weight="400">Entrega rápida e rastreada</RegularText>
                            }
                        />

                        <InfoWithIcon
                            icon={<Coffee weight="fill" size={16} />}
                            variant="quaternary"
                            text={
                                <RegularText size="m" color="text" weight="400">O café chega fresquinho até você</RegularText>
                            }
                        />

                    </ItemsContainer>
                </div>

                <img src={Img} alt="" />

            </IntroContentContainer>
        </IntroWrapper>
    )
}