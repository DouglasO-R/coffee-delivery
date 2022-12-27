import styled from "styled-components";



export const SuccessWrapper = styled.section`
    width: 100%;
    max-width: 90rem;
    margin: 0 auto;
    padding: 5rem 10rem;
    display: flex;
    gap: 6.375rem;
    align-items: center;
`

export const SuccessContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`

export const SuccessHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    > h1 {
        color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    }
`

export const OrderInfoContainer = styled.div`
    width: 100%;
    height: 16.875rem;

    display: flex;
    flex-direction: column;

    padding: 2.5rem;
    gap: 2rem;

    position: relative;
    border-radius: 6px 36px;
    background: ${({ theme }) => theme.colors["base-background"]};
    
    &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

`

type Variants = "primary" | "secondary" | "tertiary";

enum VariantColor{
    primary = "purple",
    secondary = "yellow",
    tertiary = "yellow-dark"
}
