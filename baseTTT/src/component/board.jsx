import { useState } from "react"
import Square from "./square"
import { useGameContext } from '../contexts/gameContext';

export default function Board() {
    let { winner, setWinner, turnX, setTurnX } = useGameContext()
    let [square, setSquare] = useState(Array(9).fill(''))

    function updateSqState(i){
        if (winner || square[i]) return;
        let tempSquare = [...square]

        tempSquare[i] = turnX ? 'X' : 'O'
        setSquare(tempSquare)
        setTurnX(prev => !prev)
        checkWinner(tempSquare)
    }

    function checkWinner(position) {
        let winPos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ]
        console.log('function running')
        for (let pos of winPos) {

            let [a, b, c] = pos
            if (position[a] && position[a] == position[b] && position[a] == position[c]) {
                setWinner(position[a])
                return
            }   
        }
    }
    
    return (
        <div 
        className="w-140 h-140 grid grid-cols-3 grid-rows-3 place-items-center"
        >
            {square.map((value, i) => (
                <Square key={i} value={value} sqFunc={() => updateSqState(i)} />
            ))}
        </div>
    )
}