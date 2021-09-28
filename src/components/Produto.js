import Image from "next/dist/client/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import Link from "next/link";


const MAX_RATING = 5;
const MIN_RATING = 1;

function Produto({ id, title, price, description, category, image }) {


    const dispatch = useDispatch();
    const [rating] = useState(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );

    const addItemToBasket = () => {

        const produto = {
            id, title, price, rating, description, category, image,
        };

        dispatch(addToBasket(produto));
    };



    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>


            <Link key={id} href={`/produtos/${id}`}>
                <a className="text-center link">
                    <Image src={image} height={200} width={200} objectFit="contain" />
                    <h4 className="my-3 font-bold text-left">{title}</h4>
                </a>

            </Link>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon key={i} className="h-5 text-yellow-500" />
                ))}
            </div>

            <p className="text-xs my-2  line-clamp-1">{description}</p>
            <div className="mb-5" >
                <p>R$ {price}</p>
            </div>

            <button onClick={addItemToBasket} className="mt-auto button">Adicionar ao Carrinho</button>
        </div>
    );
}

export default Produto;
