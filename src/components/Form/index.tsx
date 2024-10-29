import { CurrencyDollar, MapPinLine, Minus, Plus, Trash } from "@phosphor-icons/react"
import { AddressContainer, AddressForm, AddressHeadingContainer, CounterContainer, FormContainer } from "./styles"
import cafeTradicional from "/images/coffees/expresso.png"
import { useTheme } from "styled-components"
 
export function CheckoutForm() {
    const theme = useTheme()

    return (
        <section>
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
                            <input className="cep" type="number" placeholder="CEP"/>
                            <input id="rua" type="text" placeholder="Rua"/>
                            <input id="numero" type="number" placeholder="Número"/>
                            <input id="complemento" type="text" placeholder="Complemento"/>
                            <input id="bairro" type="text" placeholder="Bairro"/>
                            <input id="cidade" type="text" placeholder="Cidade"/>
                            <input id="uf" type="text" placeholder="UF"/>
                        </AddressForm>
                    </AddressContainer>
                    <div>
                        <div>
                            <CurrencyDollar size={25} 
                                color={theme.colors['purple-500']}
                            />
                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </div>
                        <div>
                            <button>cartao credito</button>
                            <button>cartao debito</button>
                            <button>pix</button>
                        </div>
                    </div>
               </div>
               <div>
                    <span>Cafés selecionados</span>
                    <div>
                        <img src={cafeTradicional} alt="" />
                        <div>
                            <p>Expresso Tradicional</p>
                            <div>
                                <CounterContainer>
                                    <button>
                                        <Minus size={14} />
                                    </button>
                                    <span>22</span>
                                    <button>
                                        <Plus size={14} />
                                    </button>
                                </CounterContainer>
                                <Trash size={32} weight="thin" />
                            </div>
                            <span>R$ 9,90</span>
                        </div>
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
                    </div>
               </div>
           </FormContainer>
        </section>
    )
}