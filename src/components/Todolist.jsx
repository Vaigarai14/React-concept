
/*
input [value] [ADD]
input added with [delete btn]
marked completed [btn] 
*/

/*
[ dfsdf       ]  add 
(mark) sdsfsdf [delete]

*/


import { useState } from 'react'

export const Todolist = () => {

    let [inputvalue, setinputvalue] = useState("")
    const [task, settask] = useState([])

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

    return (
        <div className="my-12">
            <div className="flex justify-center">
                <input
                    onChange={saveinput}
                    value={inputvalue}
                    type="text" className=" bg-gray-100 px-8 p-2 rounded-lg m-2 border border-gray-700" />
                <button
                    onClick={added}
                    className=' m-2 text-lg font-semibold bg-green-200 rounded-lg px-12 py-1'>Add</button>
            </div>
            <div className="text-lg">
                {task.map(item => (
                    <li key={item.id} style={{ listStyle: 'none', display: "flex", justifyContent: 'center' }} className={item.completed ? 'completed' : ''}>
                        <input type="checkbox" checked={item.completed} onChange={() => { togglebtn(item.id) }} />
                        <span>{item.text}</span>
                    </li>
                )
                )}
            </div>
        </div >
    )
}
