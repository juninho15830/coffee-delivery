import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, ControlContainer, CounterContainer } from "./styles";
import { Coffee } from "../../@types/home";

interface CoffeesProps {
    coffees: Coffee[]
}

export function Cards({ coffees }: CoffeesProps) {
    return (
        <CardContainer>
            <img src={coffees} alt={coffee.title} />
            
            {coffee.tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            

            <ControlContainer>
                <p>R$ <span>{coffee.price.toFixed(2)}</span></p>
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