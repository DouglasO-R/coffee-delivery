import styled from "styled-components";

export const OrderFomWrapper = styled.section`
    width: 40rem;
    height: 36.9375rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap:0.75rem ;

`

export const AddressContainer = styled.div`
    width: 100%;
    height:23.25rem;
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

    > div {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > input{
            width: 100%;
        }
        > p{
            position: absolute;
            right: 5px;
            margin-right: 0.5rem;

            font-style: italic;
            font-size: 0.75rem;
            color: ${({ theme }) => theme.colors["base-label"]};
        }
    }
`

export const Input = styled.input`
    height: 2.625rem;
    border-radius: 4px;
    padding: 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: 0.875rem;

    &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
        font-size: 0.875rem;
    }

`

export const PaymentContainer = styled.div` 
    width: 100%;
    height:12.9375rem;
    padding: 2.5rem;
    border-radius: 6px;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors["base-card"]};


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
            background-color: ${({theme}) => theme.colors["base-hover"]};
        }

    }
`