import { RegularText } from "../../components/RegularText";
import { TitleText } from "../../components/TitleText";
import { OrderInfoContainer, OrderInfoContent, SuccessContainer, SuccessHeader, SuccessWrapper } from "./styles";

import Img from "./assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
    return (
        <SuccessWrapper>
            <SuccessContainer>

                <SuccessHeader>
                    <TitleText size="l" weight={800} color="text">Uhu! Pedido confirmado</TitleText>
                    <RegularText size="l" weight={400} color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
                </SuccessHeader>

                <OrderInfoContainer>
                    <OrderInfoContent variant="primary">
                        <span><MapPin weight="fill"/></span>
                        <div>
                            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                            <p>Farrapos - Porto Alegre, RS</p>
                        </div>
                    </OrderInfoContent>

                    <OrderInfoContent variant="secondary">
                        <span><Timer  weight="fill"/></span>
                        <div>
                            <p>Previsão de entrega</p>
                            <p><strong>20 min - 30 min </strong></p>
                        </div>
                    </OrderInfoContent>

                    <OrderInfoContent variant="tertiary">
                        <span>
                            <CurrencyDollar weight="fill"/>
                        </span>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p><strong>Cartão de Crédito</strong></p>
                        </div>
                    </OrderInfoContent>

                </OrderInfoContainer>

            </SuccessContainer>

            <img src={Img} alt="sdf" />

        </SuccessWrapper>
    )
}