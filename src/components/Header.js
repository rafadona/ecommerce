import Image from "next/image";
import logo from "../img/rafadev.png";
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";

function Header() {
    return (
        <header>

            <div className="flex items-center bg-gray-300 p-1 flex-grow py-2" >
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image src={logo} width={150} height={40} objectFit="contain" className="cursor-pointer" />
                </div>


                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500" >
                    <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none" type="text" />
                    <SearchIcon className="h-12 p-4" />
                </div>

                <div className="text-gray-700 flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div className="link"  >
                        <p>Olá Rafael</p>
                        <p className="font-extrabold md:text-sm" >Conta e listas</p>
                    </div>
                    <div className="link">
                        <p>Devoluções</p>
                        <p className="font-extrabold md:text-sm" >e Pedidos</p>
                    </div>
                    <div className="relative link flex items-center">
                        <span className="absolute top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold" >0</span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2" >Carrinho</p>
                    </div>
                </div>
            </div>



            <div>

            </div>

        </header>
    );
}

export default Header;

