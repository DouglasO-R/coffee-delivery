import { useEffect, useState } from "react";
import { TitleText } from "../../../../components/TitleText";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, CoffeeListHeaderContainer, FilterContainer, ListContainer } from "./styles";


interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}


export function CoffeeList() {
    const [coffees, setCoffees] = useState<Coffee[]>([]);

    useEffect(() => {
        

        (async ()=>{
            const response = await (await fetch('http://localhost:3000/coffes')).json();
            setCoffees(()=>response);
            
        })()
    }, []);

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
                {coffees?.map((coffee)=>(
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))}

            </ListContainer>

        </CoffeeListContainer>
    )
}