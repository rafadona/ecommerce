
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };


    return (
        <footer className="bottom-0">
            <div>
                <button title="Para o topo" onClick={scrollToTop} className=" rounded-lg">

                    <ArrowCircleUpIcon className="h-10 text-gray-500" />

                </button>
            </div>
            <div className="text-center bg-gray-500 flex flex-col p-3">
                <h1>teste footer</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum iure perspiciatis quia reprehenderit odit unde quaerat itaque eligendi sit quibusdam possimus animi ab, aperiam at cupiditate? Quisquam praesentium est accusamus.</p>
            </div>

        </footer>
    );
}

export default Footer;
