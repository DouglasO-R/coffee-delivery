import { RegularText } from "../../components/RegularText";
import { TitleText } from "../../components/TitleText";
import { OrderInfoContainer, SuccessContainer, SuccessHeader, SuccessWrapper } from "./styles";

import Img from "./assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { InfoWithIcon } from "../../components/InfoWithIcon";

export function Success() {
    return (
        <SuccessWrapper>
            <SuccessContainer>

                <SuccessHeader>
                    <TitleText size="l" weight={800} color="text">Uhu! Pedido confirmado</TitleText>
                    <RegularText size="l" weight={400} color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
                </SuccessHeader>

                <OrderInfoContainer>

                    <InfoWithIcon
                        icon={<MapPin weight="fill" />}
                        variant="quaternary"
                        text={
                            <RegularText>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                                <br />
                                Farrapos - Porto Alegre, RS
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<Timer weight="fill" />}
                        variant="secondary"
                        text={
                            <RegularText>
                                Previsão de entrega
                                <br />
                                <strong>20 min - 30 min </strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        variant="primary"
                        text={
                            <RegularText>
                                Pagamento na entrega
                                <br />
                                <strong>Cartão de Crédito</strong>
                            </RegularText>
                        }
                    />

                </OrderInfoContainer>

            </SuccessContainer>

            <img src={Img} alt="sdf" />

        </SuccessWrapper>
    )
}