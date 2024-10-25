import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, ControlContainer, CounterContainer } from "./styles";

type CoffeesProps = {
    coffee: {
      id: string
      title: string
      description: string
      tags: string[]
      price: number
      image: string
    }
}

export function Cards({ coffee }: CoffeesProps) {
    return (
        <CardContainer>
            <img src={coffee.image} alt={coffee.title} />
            
            <div>
                {coffee.tags.map((tag) => (
                        <span key={tag}>{tag.toUpperCase()}</span>
                ))}
            </div>
            <h3>{coffee.title}</h3>
            <p>{coffee.description}</p>
            

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
                    <button title="Adicionar ao carrinho">
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </ControlContainer>
        </CardContainer>
    )
}