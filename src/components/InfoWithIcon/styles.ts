import styled from "styled-components"

interface variant {
    variant: "primary" | "secondary" | "tertiary" | "quaternary"
  }
  
  enum VariantColors {
    primary = "brand-yellow-dark",
    secondary = "brand-yellow",
    tertiary = "base-text",
    quaternary = "brand-purple"
  }
  
  export const InfoWithIconContainer = styled.div<variant>`
    display: flex;
    align-items: center;
    gap: 0.75rem;
  
    > span {
      width: 2rem;
      height: 2rem;
      border-radius: 100px;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background-color: ${({ theme,variant }) => theme.colors[`${VariantColors[variant]}`]};
      
      > svg{
        color: ${({ theme }) => theme.colors["base-background"]};
      }
    }
  `