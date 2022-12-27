import { ReactNode } from "react"
import { InfoWithIconContainer } from "./styles";

interface InfoWithIconProps {
    icon: ReactNode;
    variant: "primary" | "secondary" | "tertiary" | "quaternary";
    text: ReactNode;
}

export function InfoWithIcon({ icon, text, variant }: InfoWithIconProps) {
    return (
        <InfoWithIconContainer variant={variant}>
            <span> {icon}</span>
            {typeof text === "string" ? <p>{text}</p> : text}
        </InfoWithIconContainer>
    )
}