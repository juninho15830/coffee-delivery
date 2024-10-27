import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { CounterContainer } from "./styles"
import cafeTradicional from "/images/coffees/expresso.png"
 
export function CheckoutForm() {

    return (
        <section>
           <form action="">
               <div>
                    <span>Complete seu pedido</span>
                    <div>
                        <input type="number" />
                        <input type="text" />
                        <div>
                            <input type="number" />
                            <input type="text" />
                        </div>
                        <div>
                            <input type="text" />
                            <input type="text" />
                            <input type="text" />
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
               <div>
                    <div>
                        <p>Pagamento</p>
                        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    </div>
                    <div>
                    </div>
               </div>
           </form>
        </section>
    )
}