import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import logo from "../../assets/Logo.svg"
import { CartContainer, HeaderContainer } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <a href="/"><img src={logo} alt="Logo do site" title="Home" /></a>
            <div>
                <button>
                    <MapPin size={22} weight="fill" />
                    <span>Pindorama, SP</span>
                </button>
                <CartContainer rel="stylesheet" href="/checkout" title="Meu carrinho">
                    <ShoppingCart size={22} weight="fill" />
                    <span>10</span>
                </CartContainer>
            </div>
        </HeaderContainer>
    )
}