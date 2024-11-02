import cafeTradicional from "/images/coffees/expresso.png"
import { useTheme } from "styled-components"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"

import {
    Bank,
    CreditCard,
    CurrencyDollar,
    MapPinLine,
    Minus,
    Money,
    Plus,
    Trash
} from "@phosphor-icons/react"

import { 
    AddressContainer,
    AddressForm,
    AddressHeadingContainer,
    ButtonRemoverContainer,
    ButtonsCheckContainer,
    CheckContainer,
    CheckoutContainer,
    ConfirmContainer,
    CounterContainer,
    ErrorMessage,
    FormContainer,
    InfoContainer,
    LayoutResponsiveContainer,
    PaymentButtonsContainer,
    PaymentContainer,
    PaymentHeadingContainer, 
} from "./styles"

const newBuyFormValidationSchema = zod.object({
    cep: zod.number().min(1, 'CEP inválido'),
    road: zod.string().min(1, 'Prencha o campo Rua'),
    number: zod.string().min(1, 'Número inválido'),
    complement: zod.string().optional(),
    neighborhood: zod.string().min(1, 'Prencha o campo Bairro'),
    city: zod.string().min(1, 'Prencha o campo Cidade'),
    state: zod.string().min(1, 'Prencha o campo UF'),
    paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
        invalid_type_error: 'Informe um método de pagamento',
    }),
})

type NewBuyFormData = zod.infer<typeof newBuyFormValidationSchema>
 
export function Checkout() {
    const theme = useTheme()
    const { register, handleSubmit, formState: { errors } } = useForm<NewBuyFormData>({
        resolver: zodResolver(newBuyFormValidationSchema), 
    })

    function handleCreateNewBuy(data: NewBuyFormData) {
        console.log(data)
    }

    return (
        <CheckoutContainer>
           <FormContainer onSubmit={handleSubmit(handleCreateNewBuy)} action="">

               <LayoutResponsiveContainer>
                    <span>Complete seu pedido</span>

                    <AddressContainer>
                        <AddressHeadingContainer>
                            <MapPinLine 
                                size={25}
                                color={theme.colors['yellow-900']}
                            />
                            <div>
                                <span>Endereço de entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </AddressHeadingContainer>
                        <AddressForm>
                            <div id="cep">
                                <input
                                    type="number"
                                    placeholder="CEP"
                                    {...register('cep', { valueAsNumber: true })}
                                    style={{ borderColor: errors.cep ? 'red' : '' }}
                                />
                                {errors.cep && <ErrorMessage>{errors.cep.message}</ErrorMessage>}
                            </div>
                            <div id="road">
                                <input
                                    type="text"
                                    placeholder="Rua"
                                    {...register('road')}
                                    style={{ borderColor: errors.road ? 'red' : undefined }}
                                />
                                {errors.road && <ErrorMessage>{errors.road.message}</ErrorMessage>}
                            </div>
                            <div id="number">
                                <input
                                    type="text"
                                    placeholder="Número"
                                    {...register('number')}
                                    style={{ borderColor: errors.number ? 'red' : undefined }}
                                />
                                {errors.number && <ErrorMessage>{errors.number.message}</ErrorMessage>}
                            </div>
                            <div id="complement">
                                <input
                                    type="text"
                                    placeholder="Complemento (Opcional)"
                                    {...register('complement')}
                                />
                            </div>
                            <div id="neighborhood">
                                <input
                                    type="text"
                                    placeholder="Bairro"
                                    {...register('neighborhood')}
                                    style={{ borderColor: errors.neighborhood ? 'red' : undefined }}
                                />
                                {errors.neighborhood && <ErrorMessage>{errors.neighborhood.message}</ErrorMessage>}
                            </div>
                            <div id="city">
                                <input
                                    type="text"
                                    placeholder="Cidade"
                                    {...register('city')}
                                    style={{ borderColor: errors.city ? 'red' : undefined }}
                                />
                                {errors.city && <ErrorMessage>{errors.city.message}</ErrorMessage>}
                            </div>
                            <div id="state">
                                <input
                                    type="text"
                                    placeholder="UF"
                                    {...register('state')}
                                    style={{ borderColor: errors.state ? 'red' : undefined }}
                                />
                                {errors.state && <ErrorMessage>{errors.state.message}</ErrorMessage>}
                            </div>
                        </AddressForm>
                    </AddressContainer>

                    <PaymentContainer>
                        <PaymentHeadingContainer>
                            <CurrencyDollar size={25} 
                                color={theme.colors['purple-500']}
                            />
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </PaymentHeadingContainer>
                        
                        <PaymentButtonsContainer>
                            <input 
                                type="radio"
                                {...register('paymentMethod')}
                                value="credit"
                                id="credit"
                            />
                            <label htmlFor="credit">
                                <CreditCard size={20} color={theme.colors['purple-500']}/>
                                <span>CARTÃO DE CRÉDITO</span>
                            </label>

                            <input
                                type="radio"
                                {...register('paymentMethod')}
                                value="debit"
                                id="debit"
                            />
                            <label htmlFor="debit">
                                <Bank
                                    size={20}color={theme.colors['purple-500']}/>
                                <span>CARTÃO DE DÉBITO</span>
                            </label>

                            <input
                                type="radio"
                                {...register('paymentMethod')}
                                value="cash"
                                id="cash"
                            />
                            <label htmlFor="cash">
                                <Money size={20} color={theme.colors['purple-500']}/>
                                <span>DINHEIRO</span>
                            </label>
                            
                        </PaymentButtonsContainer>
                        {errors.paymentMethod && <ErrorMessage>{errors.paymentMethod.message}</ErrorMessage>}
                    </PaymentContainer>
               </LayoutResponsiveContainer>

               <LayoutResponsiveContainer>
                    <span>Cafés selecionados</span>
                    <InfoContainer>
                        <CheckContainer>
                            <div>
                                <img src={cafeTradicional} alt="" width={64}/>
                                <div>
                                    <p>Expresso Tradicional</p>
                                    <ButtonsCheckContainer>
                                        <CounterContainer>
                                            <button>
                                                <Minus size={14} />
                                            </button>
                                            <span>22</span>
                                            <button>
                                                <Plus size={14} />
                                            </button>
                                        </CounterContainer>
                                        <ButtonRemoverContainer>
                                            <Trash size={16} color={theme.colors['purple-500']}/>
                                            <span>REMOVER</span>
                                        </ButtonRemoverContainer>
                                    </ButtonsCheckContainer>
                                </div>
                            </div>
                            <span>R$ 9,90</span>
                        </CheckContainer>
                        <ConfirmContainer>
                            <div>
                                <p>Total de itens</p>
                                <p>R$ 29,70</p>
                            </div>
                            <div>
                                <p>Entrega</p>
                                <p>R$ 3,90</p>
                            </div>
                            <div>
                                <span>Total</span>
                                <span>R$ 33,60</span>
                            </div>
                            <button type="submit">CONFIRMAR PEDIDO</button>
                        </ConfirmContainer>
                    </InfoContainer>
               </LayoutResponsiveContainer>
           </FormContainer>
        </CheckoutContainer>
    )
}