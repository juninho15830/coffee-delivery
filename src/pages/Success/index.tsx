import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import motorcycle from "../../assets/motorcycle.jpg"
import { CheckContainer, HeadingContainer, SuccessContainer } from "./styles";
import { useTheme } from "styled-components";

export function Success() {
    const theme = useTheme()

    return (
        <SuccessContainer>
            <section>
                <HeadingContainer>
                    <h1>Uhu! Pedido confirmado</h1>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </HeadingContainer>
                <CheckContainer>
                    <div>
                        <div>
                            <MapPin
                                size={36}
                                weight="fill"
                                color={theme.colors.white}
                                style={{ backgroundColor: theme.colors['purple-500'] }}
                            />
                        </div>
                        <p>Entrega na rua Rosa Gazola, 510 bairro Residencial Marcelia</p>
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
                        <div>
                            <p>Previsão de entrega</p>
                            <span>20 min - 30 min</span>
                        </div>
                    </div>

                    <div>
                        <div>
                            <CurrencyDollar
                                size={36}
                                weight="fill"
                                color={theme.colors.white}
                                style={{ backgroundColor: theme.colors['yellow-900']} }
                            />
                        </div>
                        <div>
                            <p>Pagamento na entrega</p>
                            <span>Cartão crédito</span>
                        </div>
                    </div>
                </CheckContainer>
            </section>
            
            <img src={motorcycle} alt="" />
        </SuccessContainer>
    )
}