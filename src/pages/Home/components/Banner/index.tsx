import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import banner from "../../../../assets/Banner.png"
import { HeroContainer, HeroContent, InfoContainer } from "./styles";
import { useTheme } from "styled-components";
import backgroundHero from "../../../../assets/BackgroundHero.jpg"

export function Banner() {
    const theme = useTheme()

    return (
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
    )
}