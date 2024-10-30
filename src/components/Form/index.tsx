import cafeTradicional from "/images/coffees/expresso.png"
import { useTheme } from "styled-components"
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
    ButtonsCheckContainer,
    CheckContainer,
    CheckoutContainer,
    CounterContainer,
    FormContainer,
    InfoContainer,
    PaymentButtonsContainer,
    PaymentContainer,
    PaymentHeadingContainer 
} from "./styles"
 
export function CheckoutForm() {
    const theme = useTheme()

    return (
        <CheckoutContainer>
           <FormContainer action="">
               <div>
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
                            <input id="cep" type="number" placeholder="CEP"/>
                            <input id="rua" type="text" placeholder="Rua"/>
                            <input id="numero" type="number" placeholder="Número"/>
                            <input id="complemento" type="text" placeholder="Complemento"/>
                            <input id="bairro" type="text" placeholder="Bairro"/>
                            <input id="cidade" type="text" placeholder="Cidade"/>
                            <input id="uf" type="text" placeholder="UF"/>
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
                            <button>
                                <CreditCard size={20} color={theme.colors['purple-500']}/>
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button>
                                <Bank size={20} color={theme.colors['purple-500']}/>
                                <span>CARTÃO DE DÉBITO</span>
                            </button>
                            <button>
                                <Money size={20} color={theme.colors['purple-500']}/>
                                <span>DINHEIRO</span>
                            </button>
                        </PaymentButtonsContainer>
                    </PaymentContainer>
               </div>
               <div>
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
                                        <button>
                                            <Trash size={16} weight="thin" />
                                            <span>Remover</span>
                                        </button>
                                    </ButtonsCheckContainer>
                                </div>
                            </div>
                            <span>R$ 9,90</span>
                        </CheckContainer>
                        <div>
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
                            <button>Confirmar pedido</button>
                        </div>
                    </InfoContainer>
               </div>
           </FormContainer>
        </CheckoutContainer>
    )
}