export const ProductCard = ({title, image, price}) => {
    return (
        <>
            <div>
                <img src={image} alt={`Produto ${title}`} />
                <h3>{title}</h3>
                <p>R${price.toFixed(2).replace(".", ",")}</p>
            </div>
        </>
    )
}