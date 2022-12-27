import { ReactNode } from "react";
import { RegularTextStyle } from "./style";

export interface RegularTextProps {
    size?: "l" | "m" | "s";
    color?: "title" | "subtitle" | "text";
    weight?: string | number;
    children?: ReactNode;
}

export function RegularText({ size = "m", weight = "400", color = "text", children }: RegularTextProps) {
    return (
        <RegularTextStyle size={size} weight={weight} color={color}>
            {children}
        </RegularTextStyle>
    )
}