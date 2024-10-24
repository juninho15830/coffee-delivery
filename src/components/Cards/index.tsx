import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, ControlContainer, CounterContainer } from "./styles";
import coofeeTrad from "../../assets/coffee-trad.png";

export function Cards() {
    return (
        <CardContainer>
            <img src={coofeeTrad} alt="" />
            
            <span>TRADICIONAL</span>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            

            <ControlContainer>
                <p>R$ <span>9,90</span></p>
                <div>
                    <CounterContainer>
                        <button>
                            <Minus size={14} />
                        </button>
                        <span>1</span>
                        <button>
                            <Plus size={14} />
                        </button>
                    </CounterContainer>
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </ControlContainer>
        </CardContainer>
    )
}