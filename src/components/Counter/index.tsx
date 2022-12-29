import { Minus, Plus } from "phosphor-react";
import { CounterContainer, IconContainer } from "./style";

interface CounterProps {
    onIncrease: () => void,
    onDecrease: () => void,
    quantity: number
}

export function Counter({ onDecrease, onIncrease, quantity }: CounterProps) {
    return (
        <CounterContainer>
            <IconContainer type="button" onClick={onDecrease} disabled={quantity <= 1}>
                <Minus size={14} weight="bold" />
            </IconContainer>

            <span>{quantity}</span>

            <IconContainer type="button" onClick={onIncrease}>
                <Plus size={14} weight="bold" />
            </IconContainer>
        </CounterContainer>
    )
}