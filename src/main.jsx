import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting'
import './index.css'
// import App from './components/App'
import Boxcolorchange from './Boxcolorchange'
// import Secoundtodolist from './components/Secoundtodolist'
// import { Counter } from './components/Counter'
// import { Todolist } from './components/Todolist'


const root = ReactDOM.createRoot(document.getElementById('root'))

const Apps = () => {
  return (<div>
    <h1>{console.log(window.localStorage)}</h1>
    <Greeting randomMax={8} />
    {/* <h1></h1> */}
    {/* <Boxcolorchange /> */}
    {/* <App /> */}
    {/* <Counter /> */}
    {/* <Todolist /> */}
  </div>
  )
}

root.render(<Apps />);

