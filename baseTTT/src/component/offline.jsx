import { useState } from 'react'
import { Board } from './index.js';
import { GameProvider } from '.././contexts/gameContext';

function Offline() {
  let [winner, setWinner] = useState('')
  let [turnX, setTurnX] = useState(true)
  let message = ''
  if (turnX) {
    message = 'X'
  }
  else {
    message = 'O'
  }
  return (
    <GameProvider value={{winner, setWinner, turnX, setTurnX}}>
      <div className='text-center'>
        <h1 className='mt-1 mb-36 text-4xl font-bold'>Welcome to Tic Tac Toe</h1>
        <p className='mb-6 text-4xl font-semibold'>
          { winner ? `WINNER: ${winner}` : `Turn: ${message}`}
        </p>
        <Board />
      </div>
    </GameProvider>
  )
}

export default Offline
