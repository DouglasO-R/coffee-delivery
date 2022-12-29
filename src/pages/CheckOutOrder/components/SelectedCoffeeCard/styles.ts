import styled from "styled-components"



export const SelectedCoffeeCardWrapper = styled.div`
width: 100%;
height: 5rem;
padding: 0.5rem 0.25rem;

display: flex;
align-items: center;
justify-content: space-between;

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