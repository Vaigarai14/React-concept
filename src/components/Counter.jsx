import { useState } from "react"

export const Counter = () => {

    let [count, setcount] = useState(0)

    return (
        <div className="bg-red-100 w-full h-screen flex flex-col justify-center items-center">
            <h1 className="p-4 bg-gray-700 rounded-3xl w-2/12 text-white">Counter : {count}</h1>
            <div className="m-8">
                <button
                    onClick={() => { console.log('c'); return setcount(++count) }}
                    className="p-4 m-2 bg-gray-700 rounded-lg text-white">Increment</button>
                <button
                    onClick={() => { return setcount(--count) }}
                    className="p-4 bg-gray-700 rounded-lg  text-white">Decrement</button>
            </div></div >
    )
}