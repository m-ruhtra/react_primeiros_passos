import { CategoryCard } from "./CategoryCard"
import { categories } from "../../../data/categories"

export const CategoriesSection = () => {
    return (
        <div className="container">
            <section>
                <h2 className="title2">CATEGORIAS</h2>
                <ul>

                        {
                            categories.map((categorie) => {
                                return(
                                    <li key={categorie.id}>
                                        <CategoryCard 
                                        title={categorie.name}
                                        image={categorie.img}/>
                                    </li>
                                )
                            })
                        }
                </ul>
            </section>
        </div>
    )
}