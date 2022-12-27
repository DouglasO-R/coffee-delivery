import styled from "styled-components";

interface TitleTextProps {
    size: "xl" | "l" | "m" | "s" | "xs";
    color: "title" | "subtitle" | "text";
    weight: string | number;
}


export const TitleStyle = styled.h1<TitleTextProps>`
    font-size: ${({ theme, size }) => theme.textSizes[`title-title-${size}`]};
    color: ${({ theme, color }) => theme.colors[`base-${color}`]};
    font-weight: ${({ weight }) => weight};
    font-family: ${({ theme }) => theme.fonts.title};
    line-height: 130%;    
`