import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";


function ProdutoCheckout({ id, title, price, rating, description, category, image }) {

    const dispatch = useDispatch();

    const addItemToBasket = () => {

        const produto = {
            id, title, price, rating, description, category, image,
        };

        dispatch(addToBasket(produto));
    };

    const removeItemFromBasket = () => {

        dispatch(removeFromBasket({ id }));
    };

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain" />

            {/* meio */}
            <div className="col-span-3 ml-3">
                <p>{title}</p>

                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>

                <p className="text-xs my-2 line-clamp-3">{description}</p>

                <div className="mb-5" >
                    <p>R$ {price}</p>
                </div>

            </div>
            {/* direita */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button mt-auto">Adicionar ao Carrinho</button>
                <button onClick={removeItemFromBasket} className="button mt-auto">Remover do Carrinho</button>

            </div>
        </div>
    );
};

export default ProdutoCheckout;