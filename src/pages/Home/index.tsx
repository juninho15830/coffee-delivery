import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CardsContainer, HeroContainer, HeroContent, InfoContainer } from "./styles";
import { useTheme } from "styled-components";
import banner from "../../assets/banner.png";
import backgroundHero from "../../assets/background-hero.jpg";
import { Cards } from "../../components/Cards";
import { coffees } from "../../../data.json";

export function Home() {
    const theme = useTheme()

    return (
        <main>
            <HeroContainer>
            <HeroContent>
                <div>
                    <div>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <InfoContainer>
                        <div>
                            <div>
                                <ShoppingCart
                                    size={36}
                                    weight="fill"
                                    color={theme.colors.white}
                                    style={{ backgroundColor: theme.colors['yellow-900'] }}
                                />
                            </div>
                            <span>Compra simples e segura</span>
                        </div>
                        <div>
                            <div>
                                <Package
                                    size={36}
                                    weight="fill"
                                    color={theme.colors.white}
                                    style={{ backgroundColor: theme.colors['gray-700'] }}
                                />
                            </div>
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                        <div>
                            <div>
                                <Timer
                                    size={36}
                                    weight="fill"
                                    color={theme.colors.white}
                                    style={{ backgroundColor: theme.colors['yellow-500'] }}
                                />
                            </div>
                            <span>Entrega rápida e rastreada</span>
                        </div>
                        <div>
                            <div>
                                <Coffee
                                    size={36}
                                    weight="fill"
                                    color={theme.colors.white}
                                    style={{ backgroundColor: theme.colors['purple-500'] }}
                                />
                            </div>
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </InfoContainer>
                </div>
                <img src={banner} alt="" />
            </HeroContent>
            <img src={backgroundHero} id="hero-bg" alt="" />
        </HeroContainer>
        <CardsContainer>
            <h2>Nossos cafés</h2>
            <article>
                {coffees.map((coffee) => (
                    <Cards key={coffee.id} coffee={coffee}/>
                ))}
            </article>
        </CardsContainer>
        </main>
    )
}