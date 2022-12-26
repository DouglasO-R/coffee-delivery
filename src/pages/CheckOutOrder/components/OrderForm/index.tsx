import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { AddressContainer, FormInputContainer, Input, OrderFomWrapper, OrderFormHeaderContainer, PaymentContainer, PaymentContainerHeader, PaymentMethodContainer, PaymentMethodOptionsContainer } from "./style";


export function OrderForm() {
    return (
        <OrderFomWrapper>
            
            <TitleText size="xs" weight={700} color="subtitle">Complete seu pedido</TitleText>
            <AddressContainer>
                <OrderFormHeaderContainer>
                    <MapPinLine size={22} />
                    <div>
                        <RegularText size="m" weight={400} color="subtitle">Endereço de Entrega</RegularText>
                        <RegularText size="s" weight={400} color="text">Informe o endereço onde deseja receber seu pedido</RegularText>
                    </div>
                </OrderFormHeaderContainer>

                <FormInputContainer>
                    <Input type="number" placeholder="CEP" className="cep"/>
                    <Input type="text" placeholder="Rua" className="street"/>
                    <Input type="number" placeholder="Numero" />
                    <div className="complement">
                        <Input type="text" placeholder="Complemento" />
                        <p>Opcional</p>
                    </div>
                    <Input type="text" placeholder="Bairro" />
                    <Input type="text" placeholder="Cidade" />
                    <Input type="text" placeholder="UF" />
                </FormInputContainer>
            </AddressContainer>

            <PaymentContainer>
                <PaymentContainerHeader>
                    <CurrencyDollar size={22} />
                    <div>
                        <RegularText size="m" weight={400} color="subtitle">Pagamento</RegularText>
                        <RegularText size="s" weight={400} color="text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</RegularText>
                    </div>
                </PaymentContainerHeader>

                <PaymentMethodOptionsContainer>
                    <PaymentMethodContainer>
                        <input type="radio" name="paymentMethod" id="creditCard"/>
                        <label htmlFor="creditCard">
                            <CreditCard size={16}/>
                            <p>cartão de credito</p>
                        </label>
                    </PaymentMethodContainer>
                    
                    <PaymentMethodContainer>
                        <input type="radio" name="paymentMethod" id="bank"/>
                        <label htmlFor="bank">
                            <Bank size={16}/>
                            <p>cartão de credito</p>
                        </label>
                    </PaymentMethodContainer>

                    <PaymentMethodContainer>
                        <input type="radio" name="paymentMethod" id="money"/>
                        <label htmlFor="money">
                            <Money size={16}/>
                            <p>cartão de credito</p>
                        </label>
                    </PaymentMethodContainer>
                </PaymentMethodOptionsContainer>

            </PaymentContainer>


        </OrderFomWrapper>
    )
}