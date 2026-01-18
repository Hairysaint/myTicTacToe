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
  let [square, setSquare] = useState(Array(9).fill(''))

  function resetGame() {
    setWinner('');
    setSquare(Array(9).fill(''));
  }
  return (
    <GameProvider value={{winner, setWinner, turnX, setTurnX, square, setSquare}}>
      <div className='text-center'>
        <h1 className='mt-1 mb-36 text-4xl font-bold'>Welcome to Tic Tac Toe</h1>
        <p className='text-4xl font-bold w-fit mx-auto px-4 py-1 mb-6 border-2 border-green-900 cursor-pointer hover:bg-green-500 active:bg-blue-500'
        onClick={() => resetGame()}>
          Restart
        </p>
        <p className='mb-6 text-4xl font-semibold'>
          { winner ? `WINNER: ${winner}` : `Turn: ${message}`}
        </p>
        <Board />
      </div>
    </GameProvider>
  )
}

export default Offline
