import Produto from "./Produto";
import Image from "next/dist/client/image";
import bannerPropaganda1 from "../../public/assets/img/banner_propaganda1.jpg";
import bannerPropaganda2 from "../../public/assets/img/banner_propaganda2.jpg";



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

            <Image className=" md:col-span-full xl:col-span-full" unsized={true} src={bannerPropaganda1} alt="" />


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
