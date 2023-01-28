import { Trash } from "phosphor-react";
import { Counter } from "../../../../components/Counter";
import { RegularText } from "../../../../components/RegularText";
import { useCart } from "../../../../hooks/useCart";
import { CartItem } from "../../../../type/CartItem";
import { ActionContainer, DetailsContainer, RemoveButtonStyle, SelectCoffeeContent, SelectedCoffeeCardWrapper } from "./styles";

interface SelectedCoffeeCardProps {
    coffee: CartItem
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCardProps) {
    const { changeCartItemQuantity, removeCartItem } = useCart();
    const { id, name, photo, price, quantity } = coffee;


    const handleDecrease = () => {
        changeCartItemQuantity(id, "decrease")
    }

    const handleIncrease = () => {
        changeCartItemQuantity(id, "increase")
    }

    const handleRemoveCartItem = () => {
        removeCartItem(id)
    }
    const totalPrice = quantity * price;
    const formattedPrice = totalPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    return (
        <SelectedCoffeeCardWrapper>
            <SelectCoffeeContent>
                <img src={photo} alt="" />

                <DetailsContainer>
                    <RegularText size="m" weight={400} color="subtitle">{name}</RegularText>

                    <ActionContainer>

                        <Counter
                            onDecrease={handleDecrease}
                            onIncrease={handleIncrease}
                            quantity={quantity}
                        />

                        <RemoveButtonStyle type="button" onClick={handleRemoveCartItem}>
                            <Trash />
                            Remover
                        </RemoveButtonStyle>

                    </ActionContainer>

                </DetailsContainer>

            </SelectCoffeeContent>
            <p><strong>R$ {formattedPrice}</strong></p>

        </SelectedCoffeeCardWrapper>
    )
}