import { OrderForm } from "./components/OrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckOutOrderContainer } from "./styles";


export function CheckOutOrder(){
    return(
        <CheckOutOrderContainer>
            <OrderForm />

            
            
            <SelectedCoffees />
        </CheckOutOrderContainer>
    )
}