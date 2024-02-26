import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting'
import './index.css'
import Bgcolorchange from './components/Bgcolorchange'
import Boxcolorchange from './Boxcolorchange'
import { Counter } from './components/Counter'
import { PasswordGenerator } from './PasswordGenerator'
import { Todolist } from './components/Todolist'
import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";


const Apps = () => {

  const [btncrandomcolor, setbtncrandomcolor] = useState(Math.floor(Math.random() * 16777215).toString(16))
  return (
    <div>
      <div className="">
        <h1 className='p-4 text-4xl font-semibold bg-red-100 text-center m-4 rounded-xl shadow-xl'>React Conceptual Tasks</h1>
        <div className='flex justify-center mx-20 my-10'>
          <Link to={"/greeting"}><button className='m-4 bg-cyan-500 rounded-lg px-4  py-2 font-semibold'>Greetings</button></Link >
          <Link to={"/colorchange"}><button style={{ backgroundColor: "#" + btncrandomcolor }} className='m-4 bg-green-400 rounded-lg px-4  py-2 font-semibold'>Colorchange</button></Link >
          <Link to={"/Counter"}><button className='m-4 bg-green-400 rounded-lg px-4  py-2 font-semibold'>Counter</button></Link >
          <Link to={"/Bgcolorchange"}><button className='m-4 bg-pink-400 rounded-lg px-4  py-2 font-semibold'>BackgroundColorChange</button></Link >
          <Link to={"/todolist"}><button className='m-4 bg-violet-400 rounded-lg px-4  py-2 font-semibold'>To-Do-List</button></Link >
          <Link to={"/passwordgenerator"}><button className='m-4 bg-violet-400 rounded-lg px-4  py-2 font-semibold'>Password Generator</button></Link >
        </div>
      </div>
      <Outlet />
    </div >
  )
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Apps />,
      children: [
        {
          path: '/greeting',
          element: <Greeting randomMax={8} />
        },
        {
          path: '/colorchange',
          element: <Boxcolorchange />
        }
        ,
        {
          path: '/bgcolorchange',
          element: <Bgcolorchange />
        }
        ,
        {
          path: '/counter',
          element: <Counter />
        }
        ,
        {
          path: '/todolist',
          element: <Todolist />
        },
        {
          path: '/passwordgenerator',
          element: <PasswordGenerator />
        }
      ]
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

