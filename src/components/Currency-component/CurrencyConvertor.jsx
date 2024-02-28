import { useState } from 'react'
import { Inputbox } from './Inputbox'
import useCurrency from './hooks/useCurrency'

export const CurrencyConverter = () => {

    const [label, setlabel] = useState("");

    return (
        <div>
            <div className="w-full h-screen bg-no-repeat bg-cover text-white"
                style={{
                    backgroundImage:
                        `url(https://img.freepik.com/premium-vector/money-transfer-global-currency_115579-1115.jpg?w=900)`
                }}>
                <div className="h-screen flex justify-center items-center " >
                    <div className="bg-transparent bg-gray-300 bg-opacity-35 p-8 rounded-lg">
                        <Inputbox


                        />
                    </div>
                </div>
            </div>
        </div >
    )

}

{/* <button className="text-center bg-blue-400 py-2 my-2 rounded-lg w-full text-white">Convert { }</button> */ }
