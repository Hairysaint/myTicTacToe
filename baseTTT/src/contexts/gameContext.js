import {useContext, createContext} from 'react'

export const GameContext = createContext()

export const GameProvider = GameContext.Provider

export function useGameContext() {
    return useContext(GameContext)
}