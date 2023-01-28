import styled from "styled-components";

export const CounterContainer = styled.div`
    height: 2.375rem;
    width: 100%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.25rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["base-button"]};

`

export const IconContainer = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;


    > svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};

        &:hover{
            color: ${({ theme }) => theme.colors["brand-purple-dark"]};
        }
    }
`