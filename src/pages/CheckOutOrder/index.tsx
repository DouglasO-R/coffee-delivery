import { OrderForm } from "./components/OrderForm";
import { CheckOutOrderContainer } from "./styles";


export function CheckOutOrder(){
    return(
        <CheckOutOrderContainer>
            <OrderForm />

            
            <div>Cades</div>
        </CheckOutOrderContainer>
    )
}