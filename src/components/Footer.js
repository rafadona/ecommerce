
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <footer className="bottom-0 text-xs md:text-sm">
            <div className="flex flex-col">
                <button title="Para o topo" onClick={scrollToTop} className="bg-gray-500 hover:bg-gray-700 p-3 font-semibold">
                    Voltar ao início

                </button>
            </div>

            <div className="text-center bg-gray-600 flex flex-col p-3 space-y-2">

                <div>
                    <h2 className="font-bold">Atendimento SAC</h2>
                    <p>Horário de atendimento:
                        08:00 às 20:00 -
                        Segunda a Sexta,
                        horário de Brasília
                        (exceto sábado, domingo e feriados) </p>
                </div>

                <div>
                    <h2 className="font-bold">Central SAC</h2>
                    <p>(99) 9999-9999</p>
                    <p>faleconosco@rafaelecommerce.com.br</p>
                </div>

                <div>
                    <h2 className="font-bold">
                        Formas de pagamento aceitas:
                    </h2>
                    <p>
                        Cartões de crédito (Visa, MasterCard, Elo e American Express) e boleto.
                    </p>
                </div>
            </div>

            <div className="bg-gray-700 p-4">
                <h1 className="text-center font-semibold">Criado por <a className="link text-gray-400 hover:text-gray-100" href="mailto:rafa_dona@hotmail.com">Rafael Doná</a> </h1>
                <ul className="flex space-x-6 my-3 justify-center text-gray-400 ">
                    <li>
                        <a href="https://github.com/rafadona" target="_blank">

                            <FontAwesomeIcon className="h-10 hover:text-gray-100" icon={faGithub} size="4x" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rafael-dona/" target="_blank">

                            <FontAwesomeIcon className="h-10 hover:text-gray-100" icon={faLinkedin} size="4x" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
