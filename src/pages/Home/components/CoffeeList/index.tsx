import { TitleText } from "../../../../components/TitleText";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, CoffeeListHeaderContainer, FilterContainer, ListContainer } from "./styles";


export function CoffeeList() {
    return (
        <CoffeeListContainer>
            <CoffeeListHeaderContainer>

                <TitleText size="l" weight={800} color="subtitle" >Nossos cafés</TitleText>

                <FilterContainer>
                    <span>leite</span>
                    <span>leite</span>
                    <span>leite</span>
                </FilterContainer>

            </CoffeeListHeaderContainer>

            <ListContainer>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>

            </ListContainer>

        </CoffeeListContainer>
    )
}