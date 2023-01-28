import styled, { css } from "styled-components";

export const OrderFomWrapper = styled.section`
    width: 40rem;

    display: flex;
    flex-direction: column;
    
    gap:0.75rem ;

`
export const AddressContainer = styled.div`
    width: 100%;
    min-height:23.25rem;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
`
export const OrderFormHeaderContainer = styled.header`
    width: 100%;

    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    > svg {
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`
export const FormInputContainer = styled.div`
    display: grid;
    grid-template-columns:12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;


    .cep {
        grid-column: span 3;
        max-width: 12.5rem;
    }

    .street {
        grid-column: span 3;
    }

    .complement {
        grid-column: span 2;
    }

`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    > span {
        color: ${({ theme }) => theme.colors["base-error"]};
    }
`
export const InputStyleContainer = styled.div`
    width: 100%;
    position: relative;
    > p {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: ${({ theme }) => theme.colors["base-label"]};
        font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
        font-style: italic;
    }
`
interface InputStyleProps {
    hasError: boolean
}

export const InputStyle = styled.input<InputStyleProps>`
    width: 100%;
    height: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    gap: 0.25rem;
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-button"]};

    ${({ theme, hasError }) => hasError && css`
        border-color:${theme.colors["base-error"]};
    `}
    color:${({ theme }) => theme.colors["base-text"]}
`
export const PaymentContainer = styled.div` 
    width: 100%;
    height:12.9375rem;
    padding: 2.5rem;
    border-radius: 6px;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors["base-card"]};

    > p {
        color: ${({ theme }) => theme.colors["base-error"]};
        margin-top: 0.3rem;
    }

`
export const PaymentContainerHeader = styled.header`
    width: 100%;
    display: flex;
    gap: 0.5rem;

    > svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

`
export const PaymentMethodOptionsContainer = styled.div`
    width: 100%;
    display: flex;
    gap:0.75rem ;
`
export const PaymentMethodContainer = styled.div`
    

    > input {
        visibility: hidden;
        appearance: none;
    }

    input:checked + label {
        background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
        border: 1px solid ${({ theme }) => theme.colors["brand-purple"]};

    }

    > label {
        display: flex;
        align-items: center;

        height: 3.1875rem;
        padding: 1rem;
        gap:0.75rem;
        border-radius: 6px;

        background-color: ${({ theme }) => theme.colors["base-button"]};
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.textSizes["components-button-s"]};

        > svg {
            color: ${({ theme }) => theme.colors["brand-purple"]};
        }

        &:hover{
            background-color: ${({ theme }) => theme.colors["base-hover"]};
        }

    }
`