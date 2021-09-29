import Produto from "./Produto";


function FeedProdutos({ produtos }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">

            {produtos.slice(0, 4).map(({ id, title, price, description, category, image }) => (
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


            <img className="md:col-span-full mx-auto" src="https://i.ibb.co/NrQ7Xtx/banner-propaganda1.jpg" alt="banner-propaganda1" />

            <div className="md:col-span-2">
                {produtos.slice(4, 5).map(({ id, title, price, description, category, image }) => (
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
            <img className="md:col-span-full mt-2 mx-auto" src="https://i.ibb.co/GvgjxKb/banner-propaganda2.jpg" alt="banner-propaganda1" />


            {produtos.slice(5, produtos.length).map(({ id, title, price, description, category, image }) => (
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
