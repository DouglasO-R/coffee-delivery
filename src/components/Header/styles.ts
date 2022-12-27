import styled from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 90rem;
    height: 6.5rem;
    margin: 0 auto;

    padding: 2rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 52.25rem;

    background-color: ${({theme}) => theme.colors["base-background"]};
`

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 2.375rem;
`


export const LocationLabel = styled.div`
    border-radius: 6px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background-color: ${({ theme }) => theme.colors["brand-purple-light"]};

    > p {
        color: ${({ theme }) => theme.colors["brand-purple-dark"]};
    }

    >svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
    }
`

export const CartButton = styled.button`
    border: none;
    cursor: pointer;

    height: 2.5rem;
    width: 2.5rem;
    border-radius: 6px;
    padding: 0.5rem;
    

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 0.25rem;

    background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};


    span {
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${({ theme }) => theme.colors["base-white"]};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;

        background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

  }
`
