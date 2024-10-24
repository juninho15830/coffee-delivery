import { ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, ValueContainer } from "./styles";
import coofeeTrad from "../../assets/coffee-trad.png";

export function Cards() {
    return (
        <CardContainer>
            <img src={coofeeTrad} alt="" />
            
            <span>TRADICIONAL</span>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            

            <ValueContainer>
                <p>R$ <span>9,90</span></p>
                <div>
                    <input type="number" />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </ValueContainer>
        </CardContainer>
    )
}