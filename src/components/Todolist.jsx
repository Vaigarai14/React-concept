
/*
input [value] [ADD]
input added with [delete btn]
marked completed [btn] 
*/

/*
[ dfsdf       ]  add 
(mark) sdsfsdf [delete]

*/


import { useEffect, useState } from 'react'

export const Todolist = () => {



    let [inputvalue, setinputvalue] = useState("")
    const [task, settask] = useState([])

    useEffect(() => {

        const stritem = JSON.stringify([...task])

        task.length > 0 && window.localStorage.setItem('listitem', [stritem])

        return () => {
            window.localStorage.removeItem("")
        }
    }, [task])

    useEffect(() => {
        let storageitem = window.localStorage.getItem("listitem")
        let obj = JSON.parse(storageitem)
        if (storageitem) {
            settask(obj)
        }
    }, [])

    const saveinput = (e) => {
        setinputvalue(e.target.value)
    }

    const added = () => {
        if (inputvalue.trim() !== "") {
            settask([...task, { text: inputvalue, id: Date.now(), completed: false }])
            setinputvalue('')
        }
    }

    const togglebtn = (id) => {
        settask(task.map(item => {
            if (item.id === id) { return { ...item, completed: !item.completed } }
            return item
        }))
    }



    const deleteitem = (id) => {
        const updateditem = task.filter(item => item.id !== id)
        settask(updateditem)
        window.localStorage.removeItem('listitem')
        console.log(window.localStorage.clear
            
            );
    };



    return (
        <div className="my-12 ">
            <div className='border-4 w-fit p-4 px-24 m-auto rounded-xl'>
                <h1 className='text-6xl text-center font-bold m-4 p-2'>To do List</h1>
                <div className="flex justify-center">
                    <input
                        onChange={saveinput}
                        value={inputvalue}
                        type="text" className=" bg-gray-100 px-8 p-2 rounded-lg m-2 border border-gray-700" />
                    <button
                        onClick={added}
                        className=' m-2 text-lg font-semibold bg-green-200 rounded-lg px-12 py-1'>Add</button>
                </div>
                <div className="m-4 text-lg">
                    {task.map(item => (
                        <li key={item.id} style={{ listStyle: 'none', display: "flex", alignItems: "center", justifyContent: 'center' }} className={item.completed ? 'completed' : ''}>
                            <input className='size-5 items-center ' type="checkbox" checked={item.completed} onChange={() => { togglebtn(item.id) }} />
                            <span className="w-48 my-3 mx-4 text-left font-semibold text-xl capitalize">{item.text}</span>
                            <button
                                onClick={() => {
                                    deleteitem(item.id)
                                }}
                                className='px-4 py-1 bg-gray-800 text-white rounded-lg flex items-center'>Delete</button>
                        </li>
                    )
                    )}
                </div>
            </div>
        </div >
    )
}
