import { CategoryCard } from "./CategoryCard"
import category1 from "../../../assets/category1.png"
import category2 from "../../../assets/category2.png"

export const CategoriesSection = () => {
    return (
        <section>
            <h2 className="title2">CATEGORIAS</h2>
            <ul>
                <li><CategoryCard title="Sapatos" image={category1}/></li>
                <li><CategoryCard title="Bolsas" image={category2}/></li>
            </ul>
        </section>
    )
}