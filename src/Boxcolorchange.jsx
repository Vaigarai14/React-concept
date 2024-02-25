import { useState } from "react";

const Boxcolorchange = () => {

    const [changecolor, setchangecolor] = useState('#02e2e0')

    const randomcolor = () => {
        return ('#' + Math.floor(Math.random() * 16777215).toString(16))
    }

    // & how to get previous state value 

    const [count, setcount] = useState(Math.floor(Math.random() * 16))
    const [value, setvalue] = useState(count + 5)

    const getprev = () => {
        setvalue(value + 5)
        setcount((prev) => {
            setcount(prev + 5)
        })
    }

    return (
        <div className="my-4 ">
            <h1 className="text-center text-3xl">Color Changing box using React(Use State)</h1>
            <div className=" my-10 flex justify-center">
                <div
                    style={{ backgroundColor: changecolor }}
                    className="  w-64 h-56 bg-red-100 border-2 rounded-lg border-black p-4 text-xl">{changecolor}</div>
            </div>
            <div className="flex justify-center">
                <button
                    onClick={() => { setchangecolor(randomcolor) }}
                    className="bg-green-300 rounded-lg px-4 py-2 ">Change Color</button>
            </div >
            <div className="text-xl flex justify-center m-4">
                <h1 className="text-xl mx-2">{count} + 5 = {value}</h1>
                <button
                    onClick={getprev}
                    className="text-lg bg-red-500 rounded-lg  px-4">Add</button>

            </div>
        </div >
    )
}



export default Boxcolorchange;
