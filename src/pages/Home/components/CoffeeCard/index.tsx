import { ShoppingCart } from "phosphor-react";
import { useState } from "react";
import { Counter } from "../../../../components/Counter";
import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { useCart } from "../../../../hooks/useCart";
import { Coffee } from "../../../../type/Coffee";
import { ActionsContainer, CartButtonContainer, CoffeeCardWrapper, CoffeeFooterContainer, PriceContent, TagContent, TagsContainer } from "./style";




interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);
    const { addCoffeeToCart } = useCart();

    const { description, id, name, photo, price, tags } = coffee;

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    }

    const handleDecrease = () => {
        setQuantity((prev) => prev - 2);
    }

    const handleAddCart = () => {
        const newCoffee = {
            ...coffee,
            quantity: quantity
        }
        
        addCoffeeToCart(newCoffee);
    }

    return (
        <CoffeeCardWrapper>
            <img src={photo} alt="" />

            <TagsContainer>
                {tags?.map((tag) => (
                    <TagContent key={`${id}${tag}`}>{tag}</TagContent>
                ))}

            </TagsContainer>

            <TitleText size="s" weight={700} color="subtitle">{name}</TitleText>
            <RegularText size="s" weight={400} color="subtitle">{description}</RegularText>

            <CoffeeFooterContainer>
                <PriceContent>
                    <RegularText size="s" weight={400} color="text">R$</RegularText>
                    <TitleText size="m" weight={800} color="text">{price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TitleText>
                </PriceContent>

                <ActionsContainer>
                    <Counter quantity={quantity} onDecrease={handleDecrease} onIncrease={handleIncrease} />

                    <CartButtonContainer onClick={handleAddCart}>
                        <ShoppingCart size={22} weight="fill" />
                    </CartButtonContainer>

                </ActionsContainer>

            </CoffeeFooterContainer>
        </CoffeeCardWrapper>
    )
}