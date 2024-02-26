import { useState, useCallback, useEffect, useRef } from "react"

export const PasswordGenerator = () => {

    const [length, setlength] = useState(8)
    let [number, setnumber] = useState(false)
    let [character, setcharacter] = useState(false)
    const [password, setpassword] = useState("")

    const passwordref = useRef(null)

    const generatepassword = useCallback(() => {
        let pass = ""
        let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (number) {
            string += "123456789"
        }
        if (character) {
            string += "#%$&!@*^?+-/="
        }

        for (let index = 1; index < length; index++) {
            let num = Math.floor(Math.random() * string.length + 1)
            let char = string.charAt(num)
            pass += char
        }

        setpassword(pass)

    }, [length, number, character])


    useEffect(() => {
        generatepassword()
    }, [length, number, character])

    const passwordcopy = () => {
        console.log(window.navigator.clipboard.writeText(password));

        window.navigator.clipboard.writeText(password)
        passwordref.current?.select()
    }

    /*
    .then(() => {
            console.log("password suceesfully copied");
        }).catch((err) => {
            console.error("Password are not copied", err);
        })
*/
    return (
        <div className="items-center h-80 flex">
            <div className="bg-violet-50 shadow-xl shadow-gray-400 w-fit m-auto p-8 rounded-xl">
                <h1 className="text-center text-2xl font-semibold my-8">Password Generator</h1>
                <div className="flex  m-4 justify-center">
                    <input
                        readOnly value={password}
                        placeholder="Password"
                        type="text"
                        name="password"
                        ref={passwordref}
                        id="password"
                        className=" w-72 outline-none bg-slate-200
                         rounded-s-lg p-2 px-4" />
                    <button
                        onClick={() => { passwordcopy() }}
                        className="rounded-e-lg p-2
                         bg-blue-500 font-serif
                          text-white px-4 py-2">Copy</button>
                </div>
                <div className="flex items-center m-4 justify-center mt-10 " >
                    <input
                        onChange={(e) => { setlength(e.target.value) }}
                        min={6}
                        max={30}
                        className="mx-4"
                        type="range"
                        name="length"
                        id="charlength" />
                    <label className="mx-2" htmlFor="range">length : {length}</label>
                    <input
                        onChange={() => { setnumber(prev => !prev) }}
                        className="mx-2 size-4" type="checkbox" name="numbers" id="numbers" />
                    <label className="mx-2" htmlFor="numbers">Numbers</label>
                    <input
                        onChange={() => { setcharacter(prev => !prev) }}
                        className="mx-2 size-4" type="checkbox" name="Characters" id="Characters" />
                    <label className="mx-2" htmlFor="Characters">Characters</label>
                </div>
            </div>
        </div>
    )
}