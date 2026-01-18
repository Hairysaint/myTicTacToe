import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div
     className='h-[85vh] flex flex-col items-center text-3xl md:text-5xl font-bold
                border-4 border-white rounded-lg p-10 bg-gray-700'>
      
      <div className='mb-auto'>
        Tic Tac Toe
      </div>

      <div className='flex flex-col gap-4 my-auto'>
        <Link to={'/offline'}
        className='w-full h-auto text-center border-2 rounded-md border-[#9FF5F5] py-2 px-2
        hover:bg-blue-400 transition-all duration-300'>
          Offline
        </Link> 

        <Link to={'/multiplayer'} 
        className='w-full h-auto text-center border-2 rounded-md border-[#9FF5F5] py-2 px-2
        hover:bg-green-400 transition-all duration-300'>
          Multiplayer
        </Link>
      </div>

      <div className='mt-auto'></div>
    </div>
  )
}

export default App
