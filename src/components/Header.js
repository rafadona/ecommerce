import Image from "next/image";
import logo from "../img/rafadev.png";

function Header() {
    return (
        <header>
            <div>
                <div className="bg-red-400 py-4">
                    <Image src={logo} width={100} height={40} objectFit="contain" className="cursor-pointer" />
                </div>
            </div>

            <div>

            </div>
            <h1>i am a header</h1>
        </header>
    );
}

export default Header;
