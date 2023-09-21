export const ProductCard = ({title, image, price}) => {
    // const priceFormated = price.toFixed(2).replace(".", ",");
    const priceFormated = price.toLocaleString("pt-BR", 
    {style:"currency", currency: "BRL"});
    
    return (
        <>
            <div>
                <img src={image} alt={`Produto ${title}`} />
                <h3 className="title3">{title}</h3>
                <p className="price">{priceFormated}</p>
            </div>
        </>
    )
}