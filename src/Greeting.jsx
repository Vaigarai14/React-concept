import { useEffect, useState } from "react";

const Greeting = () => {

    const [random, setrandom] = useState(Math.floor(Math.random() * 5))
    const [state, setstate] = useState('hi')

    useEffect(() => {
        console.log(random);
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
    }, [])


    return (
        <div className="items-center w-screen h-screen flex justify-center">
            <h1
                className="bg-yellow-200 p-5 rounded-xl border
                 border-black text-black font-bold text-6xl animate-bounce">{state}</h1>
        </div>
    )
}

export default Greeting;