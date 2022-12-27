import { ReactNode } from "react";
import { TitleStyle } from "./style";

export interface TitleTextProps {
    size?: "xl" | "l" | "m" | "s" | "xs";
    color?: "title" | "subtitle" | "text";
    weight?: string | number;
    children?: ReactNode;
}

export function TitleText({ size = "s", weight = "800", color = "title", children }: TitleTextProps) {
    return (
        <TitleStyle size={size} weight={weight} color={color}>
            {children}
        </TitleStyle>
    )
}