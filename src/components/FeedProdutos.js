import Produto from "./Produto";



function FeedProdutos({ produtos }) {
    return (
        <div>

            {produtos.map(({ id, title, price, description, category, image }) => (
                <Produto
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    category={category}
                    image={image}
                    description={description}
                />
            ))}
        </div>
    );
}

export default FeedProdutos;
