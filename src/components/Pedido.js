import moment from "moment";

function Pedido({ id, email, total, time, itens }) {
    return (
        <div className="relative border rounded-md">
            <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
                <div>
                    <p className="font-bold text-xs">Data do pedido</p>
                    <p>{moment.unix(time).format("DD MMM YYYY")}</p>
                </div>
                <div>
                    <p className="text-xs font-bold">TOTAL</p>
                    <p>R$ {total}</p>

                </div>
                <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">{itens.length} itens</p>
                <p className="absolute top-2 right-2 w-40 lg:w-72 self-end truncate text-xs">PEDIDO # {id}</p>

            </div>

            <div className="p-5 sm:p-10">
                <div className="flex space-x-6 overflow-x-auto">
                    {itens.map((item, i) => (
                        <div>
                            <img title={item.title} key={i} src={item.image} alt="" className="h-20 object-contain sm:h-32" />
                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Pedido;
