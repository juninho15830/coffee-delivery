import { ShoppingCart } from "@phosphor-icons/react";
import { CardContainer } from "./styles";

export function Cards() {
    return (
        <CardContainer>
            <span>TRADICIONAL</span>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>

            <div>
                <p>R$ <span>9,90</span></p>
                <div>
                    <input type="number" />
                    <button>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </div>
        </CardContainer>
    )
}