import { useState } from 'react'

function Bgcolorchange() {
  const [colorchange, setcolorchange] = useState("olive")

  return (
    <div className='w-full duration-200  h-screen' style={{ backgroundColor: colorchange }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-1 px-12'>
        <div className=' flex flex-wrap justify-center '>
          <button
            onClick={() => { setcolorchange('red') }}
            className='bg-red-600 m-2 px-8 py-2 gap-4 rounded-3xl font-semibold text-xl' >Red</button>
          <button
            onClick={() => setcolorchange('green')}
            className='bg-green-600 m-2 px-8 py-2 gap-4 rounded-3xl font-semibold text-xl'>Green</button>
          <button
            onClick={() => setcolorchange('blue')}
            className='bg-blue-600 m-2 px-8 py-2 gap-4 rounded-3xl font-semibold text-xl'>Blue</button>
        </div>
      </div>
      <div className='flex flex-wrap top -2 inset-y-1 justify-center'>
        <button
          onClick={() => { setcolorchange('orange') }}
          className=' text-white bg-orange-400 m-2 px-8 py-2 gap-4 rounded-3xl font-semibold text-xl'>Orange</button>
        <button
          onClick={() => { setcolorchange('pink') }}
          className=' text-white bg-pink-300 m-2 px-8 py-2 gap-4 rounded-3xl font-semibold text-xl'>Violet</button>
        <button
          onClick={() => { setcolorchange('yellow') }}
          className=' text-white bg-yellow-500 m-2 px-8 py-2 gap-4 rounded-3xl font-semibold text-xl'>Yellow</button>
      </div>
    </div >
  )
}

export default Bgcolorchange
