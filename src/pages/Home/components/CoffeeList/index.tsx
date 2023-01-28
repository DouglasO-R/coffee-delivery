import { useEffect, useState } from "react";
import { TitleText } from "../../../../components/TitleText";
import { Coffee } from "../../../../type/Coffee";
import { Tag } from "../../../../type/Tag";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeListContainer, CoffeeListHeaderContainer, FilterContainer, ListContainer, TagStyle } from "./styles";



export function CoffeeList() {
    const [coffees, setCoffees] = useState<Coffee[]>([]);
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState('');


    const getCoffees = async () => {
        const response = await (await fetch('http://localhost:3000/coffes')).json();
        setCoffees(() => response);
    };

    const getTags = async () => {
        const response = await (await fetch('http://localhost:3000/tags')).json();
        setTags(() => response);
    }

    const renderTagsFilter = (tag: Tag) => {
        return (
            <TagStyle
                selected={selectedTag === tag.name}
                key={`tag-${tag.id}-${tag.name}`}
                onClick={() => setSelectedTag(tag.name)}
            >
                {tag.name}
            </TagStyle>
        )
    }

    const renderCoffeeCard = (coffee: Coffee) => (
        <CoffeeCard key={`Coffee-${coffee.id}-${coffee.name}`} coffee={coffee} />
    )

    useEffect(() => {
        getCoffees();
        getTags()
    }, []);


    const filteredCoffee = coffees.filter(coffee => coffee.tags.some(tag => tag === selectedTag));


    return (
        <CoffeeListContainer>
            <CoffeeListHeaderContainer>

                <TitleText size="l" weight={800} color="subtitle" >Nossos cafés</TitleText>

                <FilterContainer>
                    <TagStyle
                        selected={selectedTag === ''}
                        key={`tag-default}`}
                        onClick={() => setSelectedTag("")}

                    >
                        All
                    </TagStyle>
                    {tags && tags.map(renderTagsFilter)}
                </FilterContainer>

            </CoffeeListHeaderContainer>

            <ListContainer>
                {selectedTag ? filteredCoffee.map(renderCoffeeCard) : coffees.map(renderCoffeeCard)}

            </ListContainer>

        </CoffeeListContainer>
    )
}