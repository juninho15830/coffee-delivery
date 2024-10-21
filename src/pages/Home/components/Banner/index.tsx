import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import banner from "../../../../assets/Banner.jpg"

export function Banner() {
    return (
        <section>
            <article>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </div>
                <div>
                    <div>
                        <div>
                            <ShoppingCart size={22} weight="fill" />
                        </div>
                        <span>Compra simples e segura</span>
                    </div>
                    <div>
                        <div>
                            <Timer size={22} weight="fill" />
                        </div>
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div>
                        <div>
                            <Package size={22} weight="fill" />
                        </div>
                        <span>Embalagem mantém o café intacto</span>
                    </div>
                    <div>
                        <div>
                            <Coffee size={22} weight="fill" />
                        </div>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </div>
            </article>
            <article>
                <img src={banner} alt="" />
            </article>
        </section>
    )
}