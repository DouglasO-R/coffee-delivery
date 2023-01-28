import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";


import { FormData } from "../..";
import { RegularText } from "../../../../components/RegularText";
import { TitleText } from "../../../../components/TitleText";
import { AddressContainer, FormInputContainer, InputStyle, InputStyleContainer, InputWrapper, OrderFomWrapper, OrderFormHeaderContainer, PaymentContainer, PaymentContainerHeader, PaymentMethodContainer, PaymentMethodOptionsContainer } from "./style";


interface ErrorsType {
    errors: {
        [key: string]: {
            message: string;
        };
    };
}

const PaymentOptions = [
    {
        value: "credit",
        icon: <CreditCard size={16} />,
        text: "cartão de crédito"
    },
    {
        value: "debit",
        icon: <Bank size={16} />,
        text: "cartão de débito"
    },
    {
        value: "money",
        icon: <Money size={16} />,
        text: "dinheiro"
    },
];

type PaymentOptionType = typeof PaymentOptions[0];

interface FieldInput {
    name: "number" | "cep" | "street" | "complement" | "district" | "city" | "state",
    type: string,
    placeholder: string
}

const FieldList: FieldInput[] = [
    {
        name: "cep",
        type: "number",
        placeholder: "CEP"
    },
    {
        name: "street",
        type: "string",
        placeholder: "Rua"
    },
    {
        name: "number",
        type: "number",
        placeholder: "Numero"
    },
    {
        name: "complement",
        type: "string",
        placeholder: "Complemento"
    },
    {
        name: "district",
        type: "string",
        placeholder: "Bairro"
    },
    {
        name: "city",
        type: "string",
        placeholder: "Cidade"
    },
    {
        name: "state",
        type: "string",
        placeholder: "UF"
    },

]



export function OrderForm() {
    const { register, formState, watch } = useFormContext<FormData>();
    const { errors } = formState as ErrorsType;

    const renderPaymentOptions = (options: PaymentOptionType, index: number) => (
        <PaymentMethodContainer key={index}>
            <input {...register("paymentMethod")} type="radio" name="paymentMethod" id={options.value} value={options.value} />
            <label htmlFor={options.value}>
                {options.icon}
                <p>{options.text}</p>
            </label>
        </PaymentMethodContainer>
    )

    const optionalIsFilled = watch('complement');
    const renderInputs = (input: FieldInput, index: number) => (
        <InputWrapper className={input.name} key={index}>
            <InputStyleContainer>
                <InputStyle
                    hasError={!!errors[input.name]}
                    placeholder={input.placeholder}
                    type={input.type}
                    {...register(input.name)}
                />
                {(input.name === 'complement' && !optionalIsFilled) && <p>Opcional</p>}
            </InputStyleContainer>
            {errors[input.name] && <span>{errors[input.name]?.message}</span>}
        </InputWrapper>
    )

    return (
        <OrderFomWrapper>

            <TitleText size="xs" weight={700} color="subtitle">Complete seu pedido</TitleText>
            <AddressContainer>

                <OrderFormHeaderContainer>
                    <MapPinLine size={22} />
                    <div>
                        <RegularText size="m" weight={400} color="subtitle">Endereço de Entrega</RegularText>
                        <RegularText size="s" weight={400} color="text">Informe o endereço onde deseja receber seu pedido</RegularText>
                    </div>
                </OrderFormHeaderContainer>

                <FormInputContainer>
                    {FieldList.map(renderInputs)}
                </FormInputContainer>

            </AddressContainer>

            <PaymentContainer>

                <PaymentContainerHeader>
                    <CurrencyDollar size={22} />
                    <div>
                        <RegularText size="m" weight={400} color="subtitle">Pagamento</RegularText>
                        <RegularText size="s" weight={400} color="text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</RegularText>
                    </div>
                </PaymentContainerHeader>

                <PaymentMethodOptionsContainer>

                    {PaymentOptions.map(renderPaymentOptions)}

                </PaymentMethodOptionsContainer>
                {errors.paymentMethod?.message && <p>{errors.paymentMethod?.message}</p>}

            </PaymentContainer>


        </OrderFomWrapper>
    )
}