import { ProductCard } from "./ProductCard"
import { products } from "../../../data/products"


export const ProductsSection = () => {
    return (
        <div className="container">
            <section>
                <h2 className="title2">PRODUTOS EM DESTAQUE</h2>
                <ul>
                    {
                        products.map((product) => {
                            return (
                                <li key={product.id}>
                                    <ProductCard 
                                        title={product.name}
                                        image={product.img}
                                        price={product.price}
                                    />
                                </li>
                            )
                        })
                    }

                    <>
                    {/* <li><ProductCard title="Blazer Branco Elegante"
                        price={490} image={product1} /></li>
                    <li><ProductCard title="Sapatos Amarelos"
                        price={490} image={product2} /></li>
                    <li><ProductCard title="Blazer Laranja"
                        price={320} image={product3} /></li>
                    <li><ProductCard title="Calça Preta"
                        price={140} image={product4} /></li> */}
                    </>
                </ul>
            </section>
        </div>
    )
}