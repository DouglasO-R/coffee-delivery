import styled from "styled-components";

export const SelectedCoffeesWrapper = styled.section`
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    

`

export const SelectedCoffeesContainer = styled.div`
    width: 100%;
    padding: 2.5rem;
    gap: 1.5rem;
    background-color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 44px;
`

export const SelectedCoffeeCard = styled.div`
    width: 100%;
    height: 5rem;
    padding: 0.5rem 0.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.6875rem;

    background-color: ${({ theme }) => theme.colors["base-card"]};

`
export const SelectCoffeeContent = styled.div`
    
    display: flex;
    gap: 1.25rem;
    
    > img {
        height: 4rem;
        width: 4rem;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

`
export const ActionContainer = styled.div`
    display: flex;
    gap: 0.5rem;

`

export const RemoveButtonStyle = styled.button`

    border: none;
    display: flex;
    align-items: center;
    
    gap: 0.25rem;
    padding: 0 0.5rem;
    background-color: ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;

    font-size: ${({theme}) => theme.textSizes["components-button-s"]};
    font-weight: 400;
    color: ${({theme}) => theme.colors["base-text"]};
    text-transform: uppercase;

    > svg {
        color: ${({theme}) => theme.colors["brand-purple"]};
    }

    &:hover{
        background-color: ${({theme}) => theme.colors["base-hover"]};
    }
`

export const CounterContainer = styled.div`
    height: 2rem;
    width: 100%;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.25rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["base-button"]};

    > button{
        border: none;
        cursor: pointer;
        background-color: transparent;

        > svg {
            color: ${({ theme }) => theme.colors["brand-purple"]};
        }
    }
`

export const Divider = styled.div`
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};
    margin: 1.5rem 0;
`


export const MoneyInfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.5rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }



`

export const ConfirmButton = styled.button`
    width: 100%;
    height:2.875rem;
    padding: 0.75rem 0.5rem;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["brand-yellow"]};
    color: ${({ theme }) => theme.colors["base-white"]};

    border: none;
    cursor: pointer;

    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};
    font-weight: 700;
    text-transform: uppercase;

`