import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting'
import './index.css'
import Bgcolorchange from './components/Bgcolorchange'
import Boxcolorchange from './Boxcolorchange'
import { Counter } from './components/Counter'
import { Todolist } from './components/Todolist'
import { createBrowserRouter, Outlet, RouterProvider, Link } from "react-router-dom";


const Apps = () => {
  return (
    <div>
      <Link to={"/greeting"}><button>clickme</button></Link >
      <h1>this is home page</h1>
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
        }
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);

