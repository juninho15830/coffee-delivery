import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import logo from "../../assets/Logo.svg"
import { CartContainer, HeaderContainer } from "./styles"

export function Header() {
    return (
        <HeaderContainer>
            <a href="/"><img src={logo} alt="" /></a>
            <div>
                <button>
                    <MapPin size={22} weight="fill" />
                    <span>Pindorama, SP</span>
                </button>
                <CartContainer rel="stylesheet" href="/checkout">
                    <ShoppingCart size={22} weight="fill" />
                    <span>1</span>
                </CartContainer>
            </div>
        </HeaderContainer>
    )
}