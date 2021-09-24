
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { ArrowCircleUpIcon } from "@heroicons/react/solid";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <footer className="bottom-0">
            <div className="flex flex-col">
                <button title="Para o topo" onClick={scrollToTop} className="bg-gray-400 hover:bg-gray-700 p-3">
                    Voltar ao início

                </button>
            </div>

            <div className="text-center bg-gray-500 flex flex-col p-3">
                <h1>teste footer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iure perspiciatis quia reprehenderit odit unde quaerat itaque eligendi sit quibusdam possimus animi ab, aperiam at cupiditate? Quisquam praesentium est accusamus.</p>
            </div>

            <div className="bg-gray-700 p-4">
                <h1 className="text-center">Criado por <a className="link" href="mailto:rafa_dona@hotmail.com">Rafael Doná</a> </h1>
                <ul className="flex space-x-6 my-3 justify-center ">
                    <li>
                        <a href="https://github.com/rafadona" target="_blank">

                            <FontAwesomeIcon className="h-10" icon={faGithub} size="4x" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rafael-dona/" target="_blank">

                            <FontAwesomeIcon className="h-10" icon={faLinkedin} size="4x" />
                        </a>
                    </li>
                </ul>



            </div>
        </footer>
    );
}

export default Footer;
