import { Minus, Plus, Trash } from "phosphor-react";
import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { ActionContainer, ConfirmButton, CounterContainer, DetailsContainer, Divider, MoneyInfoContainer, RemoveButtonStyle, SelectCoffeeContent, SelectedCoffeeCard, SelectedCoffeesContainer, SelectedCoffeesWrapper } from "./style";

import Coffee from "../../assets/Coffee.png";

export function SelectedCoffees() {
    return (
        <SelectedCoffeesWrapper>
            <TitleText size="xs" weight={700} color="subtitle">Cafés selecionados</TitleText>

            <SelectedCoffeesContainer>

                <SelectedCoffeeCard>
                    <SelectCoffeeContent>
                        <img src={Coffee} alt="" />

                        <DetailsContainer>
                            <RegularText size="m" weight={400} color="subtitle">Expresso Tradicional</RegularText>

                            <ActionContainer>
                                <CounterContainer>
                                    <button><Minus /></button>
                                    <span>1</span>
                                    <button><Plus /></button>
                                </CounterContainer>

                                <RemoveButtonStyle>
                                    <Trash />
                                    Remover
                                </RemoveButtonStyle>

                            </ActionContainer>
                        </DetailsContainer>

                    </SelectCoffeeContent>

                    <p>R$9,90</p>
                </SelectedCoffeeCard>

                <Divider />

                <SelectedCoffeeCard>
                    <SelectCoffeeContent>
                        <img src={Coffee} alt="" />

                        <DetailsContainer>
                            <RegularText size="m" weight={400} color="subtitle">Expresso Tradicional</RegularText>

                            <ActionContainer>
                                <CounterContainer>
                                    <button><Minus /></button>
                                    <span>1</span>
                                    <button><Plus /></button>
                                </CounterContainer>

                                <RemoveButtonStyle>
                                    <Trash />
                                    Remover
                                </RemoveButtonStyle>

                            </ActionContainer>
                        </DetailsContainer>

                    </SelectCoffeeContent>

                    <p>R$9,90</p>
                </SelectedCoffeeCard>

                <Divider />


                <MoneyInfoContainer>
                    <div>
                        <RegularText size="s" weight={400} color="text">Total de itens</RegularText>
                        <RegularText size="s" weight={400} color="text">R$29,99</RegularText>

                    </div>
                    <div>
                        <RegularText size="s" weight={400} color="text">Entrega</RegularText>
                        <RegularText size="s" weight={400} color="text">R$9,99</RegularText>
                    </div>
                    <div>
                        <RegularText size="l" weight={700} color="text">Total</RegularText>
                        <RegularText size="l" weight={700} color="text">R$99,99</RegularText>
                    </div>

                </MoneyInfoContainer>

                <ConfirmButton>confirmar pedido</ConfirmButton>
            </SelectedCoffeesContainer>


        </SelectedCoffeesWrapper>
    )
}