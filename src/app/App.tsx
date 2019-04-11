import React, { FC, useReducer, useState } from 'react'

import { initialState, reducer } from './app.reducer'
import { MajInput } from './components/MajInput'

export const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (<>
    <MajInput state={state} dispatch={dispatch} />
  </>)
}
