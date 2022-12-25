import styled from "styled-components";

export const CoffeeCardWrapper = styled.article`
    width: 16rem;
    height: 19.375rem;
    border-radius: 6px 36px;
    padding: 1.25rem;
    padding-top: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    background-color: ${({ theme }) => theme.colors["base-card"]};

    > img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
        margin-bottom:0.75rem ;
    }

    > p {
        color: ${({ theme }) => theme.colors["base-label"]};
        margin-top: 0.5rem;
    }
`
export const TagsContainer = styled.div`
    width: 100%;
    height: 1.3125rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 1rem;

    > span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0.5rem;
        border-radius: 100px;

        background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
        font-size: ${({ theme }) => theme.textSizes["components-tag"]};
        font-weight: 700;
    }

`

export const CoffeeFooterContainer = styled.div`
    width: 100%;
    margin-top: 2.0625rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
    }

`

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;

    gap:0.5rem ;
`

export const CounterContainer = styled.div`
    height: 2.375rem;
    width: 100%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.25rem;
    border-radius: 6px;

    background-color: ${({theme}) => theme.colors["base-button"]};

    > button{
        border: none;
        cursor: pointer;
        background-color: transparent;

        > svg {
            color: ${({theme}) => theme.colors["brand-purple"]};
        }
    }
`

export const CartButtonContainer = styled.button`
    border: none;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors["brand-purple-dark"]};
    color: ${({theme}) => theme.colors["base-background"]};

    height:2.375rem ;
    width:2.375rem ;
    padding: 0.375rem;
    border-radius: 6px;
    gap: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }

`