import React, { FC, useReducer, useState, Reducer } from 'react'

import { initialState, reducer, State, Action } from './App.reducer'
import { MajInput } from './MajInput'

export const App: FC = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, initialState)
  return (<>
    <MajInput state={state} dispatch={dispatch} />
  </>)
}
