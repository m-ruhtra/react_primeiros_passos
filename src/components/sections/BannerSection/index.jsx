import banner from "../../../assets/banner.jpg"

export const BannerSection = () => {
    return (
        <section>
            <img src={banner} alt="imagem do Banner" />
            <div>
                <h1 className="title1">Fashion Store</h1>
                <p className="paragraph">Fique por dentro das nossas últimas promoções e novidades</p>
                <a href="" className="btn">Confira as Ofertas</a>
            </div>
        </section>
    )
}