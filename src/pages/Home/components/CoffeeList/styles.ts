import styled from "styled-components";


export const CoffeeListContainer = styled.section`
    width: 100%;
    max-width: 90rem;
    min-height: 5rem;
    margin: 0 auto;
    padding: 2rem 10rem;

    display: flex;
    flex-direction: column;
   
`

export const CoffeeListHeaderContainer = styled.div`
    height:1.5625rem ;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 3.25rem;

`

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
interface TagStyleProps {
    selected: boolean;
}

export const TagStyle = styled.button<TagStyleProps>`
    border: none;
    background-color: ${({ selected, theme }) => selected ? theme.colors["brand-yellow-light"] : 'transparent'};
    padding: 0.375rem 0.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: solid ${({ theme }) => theme.colors["brand-yellow"]} 1px;
    border-radius: 100px;

    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-weight: 700;
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
`
export const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    column-gap: 2rem;
    row-gap:2.5rem ;
`