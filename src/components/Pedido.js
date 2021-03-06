import moment from "moment";
import Link from "next/link";

function Pedido({ id, email, total, time, itens }) {
    return (
        <div className="relative border rounded-md mt-4">
            <div className='flex justify-between items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
                <div>
                    <p className="font-bold text-xs">Data do pedido</p>
                    <p>{moment.unix(time).format("DD MMM YYYY")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>R$ {total}</p>

                </div>
                {/* <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{itens.length} itens</p>
                <p className="absolute top-2 right-1 w-40 lg:w-72 truncate text-xs">PEDIDO # {id}</p> */}
                <div className="">
                    <p className="break-words text-xs"><span className="hidden sm:inline">PEDIDO #</span> {id}</p>
                    <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{itens.length} itens</p>

                </div>



            </div>

            <div className="p-5 sm:p-10">
                <div className="flex space-x-8 overflow-x-scroll">
                    {itens.map((item, i) => (
                        <Link className="cursor-pointer link" key={item.id} href={`/produtos/${item.id}`} passHref>
                            <img title={item.title} key={i} src={item.image} alt="" className="h-28 object-contain sm:h-40 cursor-pointer hover:opacity-95" />
                        </Link>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pedido;
