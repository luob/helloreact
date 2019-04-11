import { Reducer } from "react"

export type State = Readonly<{
  tiles: number[]
  option: object
}>

export const initialState: State = {
  tiles: [],
  option: {},
}

export type Action =
  | { type: 'SET_TILES', tiles: number[] }
  | { type: 'SET_OPTION', option: object }
  | { type: 'CLEAN_OPTION' }
  | { type: 'CLEAN_ALL' }

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'SET_TILES':
      return { ...state, tiles: action.tiles, }
    case 'SET_OPTION':
      return { ...state, option: action.option, }
    case 'CLEAN_OPTION':
      return { ...state, option: {} }
    case 'CLEAN_ALL':
      return initialState
    default:
      return state
  }
}