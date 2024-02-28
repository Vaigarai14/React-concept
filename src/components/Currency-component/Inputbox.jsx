export const Inputbox = (
    label,
    onamount,
    amount,
    oncurrencyoption,
    currency
) => {

    return (
        <div className=" bg-white my-2 w-[30em] p-4 rounded-lg flex justify-between ">
            <div >
                <p className="text-gray-400 ">{ }</p>
                <input
                    className="border-b-2 border-gray-300 outline-none px-2 my-4 w-[15em] text-black"
                    type="number" name="currency" id="currency" />
            </div>
            <div>
                <p className="text-gray-400 ">Currency type</p>
                <select name="dropdown" id="dropdown">{ }</select>
            </div>
        </div >
    )
}


{/* <button className=" absolute top-44 right-[37em] text-center bg-blue-400 py-2 rounded-lg px-8 text-white">Swap</button> */ }
