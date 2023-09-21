import banner from "../../../assets/banner.jpg"
import style from "./style.module.css"

export const BannerSection = () => {
    return (
        <div className="container">
            <section className={style.flexbox}>
                <img src={banner} alt="imagem do Banner" />
                <div>
                    <h1 className="title1">Fashion Store</h1>
                    <p className="paragraph">Fique por dentro das nossas últimas promoções e novidades</p>
                    <a href="" className="btn">Confira as Ofertas</a>
                </div>
            </section>
        </div>

    )
}