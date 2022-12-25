import styled from "styled-components";
import ImgBackground from "../../assets/Background.png";

export const IntroWrapper = styled.section`
  width: 100%;
  height: 34rem;

  background: url(${ImgBackground}) no-repeat center;
  background-size: cover;
`

export const IntroContentContainer = styled.div`
    width: 100%;
    max-width: 90rem;
    height: 100%;

    margin: 0 auto;
    padding:0 10rem ;

    display: flex;
    align-items: center;
    gap: 3.5rem;
    
    > div {
      display: flex;
      flex-direction: column;
      gap: 4.125rem;
    }

    >img {
      margin-top: 5.75rem;
      height: 22.5rem;
      width: 29.75rem;
    }
`

export const TitleContainer = styled.div`
    margin-top: 5.875rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  row-gap: 1.25rem;

`
interface variant {
  variant: "primary" | "secondary" | "tertiary" | "quaternary"
}

enum VariantColors {
  primary = "brand-yellow-dark",
  secondary = "brand-yellow",
  tertiary = "base-text",
  quaternary = "brand-purple"
}

export const ItemContainer = styled.div<variant>`
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