import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { OrderForm } from "./components/OrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckOutOrderContainer } from "./styles";
import { useCart } from "../../hooks/useCart";


enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const FormDataValidateSchema = zod.object({
    cep: zod.string().min(1, "Informe o Cep"),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe a Rua"),
    complement: zod.string().min(1, "Informe o Complemento "),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    state: zod.string().min(1, "Informe o Estado"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" }
        }
    })
})

export type FormData = zod.infer<typeof FormDataValidateSchema>;

export function CheckOutOrder() {
    const { cleanCart } = useCart();
    const formData = useForm<FormData>({
        resolver: zodResolver(FormDataValidateSchema),
        defaultValues: {
            paymentMethod: undefined,
        },
    });
    const { handleSubmit } = formData
    const navigate = useNavigate();


    function onSubmit(data: FormData) {
        cleanCart();
        navigate("/success", {
            state: data,
        });

    }


    return (
        <FormProvider {...formData}>
            <CheckOutOrderContainer onSubmit={handleSubmit(onSubmit)}>
                <OrderForm />


                <SelectedCoffees />
            </CheckOutOrderContainer>
        </FormProvider>

    )
}