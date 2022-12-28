import { ShoppingCart } from "phosphor-react";
import { Counter } from "../../../../components/Counter";
import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { ActionsContainer, CartButtonContainer, CoffeeCardWrapper, CoffeeFooterContainer, PriceContent, TagContent, TagsContainer } from "./style";


interface Coffee{
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
  }

export function CoffeeCard({coffee}:CoffeeProps) {
    const {description,id,name,photo,price,tags} = coffee;
    return (
        <CoffeeCardWrapper>
            <img src={photo} alt="" />

            <TagsContainer>
                {tags?.map((tag)=> (
                    <TagContent key={`${id}${tag}`}>{tag}</TagContent>
                ))}

            </TagsContainer>

            <TitleText size="s" weight={700} color="subtitle">{name}</TitleText>
            <RegularText size="s" weight={400} color="subtitle">{description}</RegularText>

            <CoffeeFooterContainer>
                <PriceContent>
                    <RegularText size="s" weight={400} color="text">R$</RegularText>
                    <TitleText size="m" weight={800} color="text">{price.toLocaleString("pt-BR",{minimumFractionDigits:2})}</TitleText>
                </PriceContent>

                <ActionsContainer>
                    <Counter />

                    <CartButtonContainer>
                        <ShoppingCart size={22} weight="fill"/>
                    </CartButtonContainer>

                </ActionsContainer>
                
            </CoffeeFooterContainer>
        </CoffeeCardWrapper>
    )
}