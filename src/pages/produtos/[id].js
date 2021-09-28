import Image from "next/dist/client/image";
import { useDispatch } from "react-redux";
import Header from "../../components/Header";
import { addToBasket } from "../../slices/basketSlice";



function PaginaDetalhes({ produto }) {
    const dispatch = useDispatch();

    const addItemToBasket = () => {

        const produtoCarrinho = {
            id: produto.id,
            title: produto.title,
            price: produto.price,
            rating: produto.rating,
            description: produto.description,
            category: produto.category,
            image: produto.image,
        };

        dispatch(addToBasket(produtoCarrinho));
    };




    return (
        <div>
            <Header />




            <div className="mt-6 max-w-2xl mx-auto sm:px-2 lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-2 border border-gray-600">
                <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                    <img
                        src={produto.image}
                        alt={produto.image}
                        className="w-full h-full object-center object-cover"
                    />
                </div>


                <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-6xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                    <div className="lg:col-span-2  lg:pr-8">
                        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{produto.title}</h1>
                    </div>
                    <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:pr-8">
                        {/* Description and details */}
                        <div>
                            <h3 className="font-bold">Descrição</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{produto.description}</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <button onClick={addItemToBasket} className="mt-auto button">Adicionar ao Carrinho</button>



        </div>

    );
}

export default PaginaDetalhes;



export async function getStaticPaths() {

    const res = await fetch(`https://fakestoreapi.com/products/`);
    const produtos = await res.json();

    return {
        paths: produtos.map((produto) => ({
            params: {
                id: produto.id.toString(),
            }
        })),
        fallback: false,
    };
}


export async function getStaticProps(context) {

    const id = context.params.id;


    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const produto = await res.json();

    return {
        props: {
            produto,
        }
    };

}
