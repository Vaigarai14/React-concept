import { useEffect, useState } from "react";

const Greeting = ({ randomMax }) => {

    console.log(randomMax);

    const [random, setrandom] = useState(Math.floor(Math.random() * randomMax))
    const [state, setstate] = useState('hi')

    useEffect(() => {
        window.localStorage.setItem("RandomNumber", random)

        if (random === randomMax) {
            window.localStorage.setItem("jackpot", true)
        }
        else {
            window.localStorage.setItem("jackpot", false)
        }

        switch (random) {
            case 0:
                setstate("Anyoung haseyo")
                break;
            case 1:
                setstate("Vanakkam")
                break;
            case 2:
                setstate("Namaste")
                break;
            case 3:
                setstate("Hola")
                break;
            case 4:
                setstate("Bonjour")
                break;
            default:
                setstate("Hello")
                break;
        }

        return () => {
            console.log("cleanup");
            window.localStorage.removeItem("jackpot")
            window.localStorage.removeItem("RandomNumber")
        }

    }, [random, randomMax])


    return (
        <div className="items-center w-screen h-screen flex justify-center">
            <h1
                className="bg-yellow-200 p-5 rounded-xl border
                 border-black text-black font-bold text-6xl animate-bounce italic">{state}</h1>
        </div>
    )
}

export default Greeting;