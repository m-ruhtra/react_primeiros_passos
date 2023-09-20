import { ProductCard } from "./ProductCard"
import product1 from "../../../assets/product1.jpg"
import product2 from "../../../assets/product2.jpg"
import product3 from "../../../assets/product3.jpg"
import product4 from "../../../assets/product4.jpg"

export const ProductsSection = () => {
    return (
        <section>
            <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
            <ul>
                <li><ProductCard title="Blazer Branco Elegante"
                price={490} image={product1}/></li>
                <li><ProductCard title="Sapatos Amarelos"
                price={490} image={product2}/></li>
                <li><ProductCard title="Blazer Laranja"
                price={320} image={product3}/></li>
                <li><ProductCard title="Calça Preta"
                price={140} image={product4}/></li>
            </ul>
        </section>
    )
}