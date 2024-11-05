import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import { CardContainer, ControlContainer, CounterContainer } from "./styles";
import { useState } from "react";

type CoffeesProps = {
  coffee: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    price: number;
    image: string;
  };
};

interface NewItem {
  id: string;
  title: string;
  price: number;
  image: string;
  totalItems: number;
}

export function Cards({ coffee }: CoffeesProps) {
  const [count, setCount] = useState(1);
  const [addItem, setAddItem] = useState<NewItem[]>([])
  const [list, setList] = useState()

  function handleIncrement() {
    setCount((state) => state  + 1);
  }

  function handleDecrement() {
    setCount((state) => state > 1 ? count - 1 : 1);
  }

  function handleAddNewItem() {
    const newItem: NewItem = {
      id: String(new Date().getTime()),
      title: coffee.title,
      price: coffee.price * count,
      image: coffee.image,
      totalItems: count,
    }

    setAddItem((state) => [...state, newItem])
  }

  console.log(addItem)

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
        <p>
          R$ <span>{coffee.price.toFixed(2)}</span>
        </p>
        <div>
          <CounterContainer>
            <button onClick={handleDecrement}>
              <Minus size={14} />
            </button>
            <span>{count}</span>
            <button onClick={handleIncrement}>
              <Plus size={14} />
            </button>
          </CounterContainer>
          <button onClick={handleAddNewItem} title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </ControlContainer>
    </CardContainer>
  );
}
