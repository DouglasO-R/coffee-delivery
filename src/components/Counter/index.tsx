import { Minus, Plus } from "phosphor-react";
import { CounterContainer, IconContainer } from "./style";

export function Counter() {
    return (
        <CounterContainer>
            <IconContainer>
                <Minus size={14} weight="bold" />
            </IconContainer>

            <span>10</span>

            <IconContainer>
                <Plus size={14} weight="bold" />
            </IconContainer>
            
        </CounterContainer>
    )
}