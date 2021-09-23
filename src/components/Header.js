import Image from "next/image";
import logo from "../../public/assets/img/rafadev.png";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
    const [session] = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);



    return (
        <header>

            <div className="flex items-center bg-gray-400 p-1 flex-grow py-2" >
                <div className="mt-2 mr-1 flex items-center flex-grow sm:flex-grow-0">
                    <Image onClick={() => router.push('/')} src={logo} width={150} height={40} objectFit="contain" className="cursor-pointer" />
                </div>


                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500" >
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                <div className="text-gray-700 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link"  >
                        <p>
                            {session ? `Olá, ${session.user.name}` : "Fazer Login"}
                        </p>
                        <p className="font-extrabold md:text-sm" >Conta</p>
                    </div>
                    <div onClick={() => router.push("/pedidos")} className="link">
                        <p>Seus</p>
                        <p className="font-extrabold md:text-sm" >Pedidos</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold" >
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2" >Carrinho</p>
                    </div>
                </div>
            </div>



            <div className="flex items-center space-x-4 bg-gray-300 text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" />
                    Todos
                </p>
                <p className="link">Eletronicos</p>
                <p className="link">Oferta do dia</p>
                <p className="link">Mais Vendidos</p>
                <p className="link hidden sm:inline-flex">Livros</p>
                <p className="link hidden sm:inline-flex">Computadores</p>
                <p className="link hidden sm:inline-flex">Roupas</p>
                <p className="link hidden md:inline-flex">Atendimento ao Cliente</p>
                <p className="link hidden lg:inline-flex">Comprar novamente</p>
            </div>

        </header>
    );
}

export default Header;

