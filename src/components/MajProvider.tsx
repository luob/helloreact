import React, { useReducer, FC } from 'react'
import { initialState, reducer, majState, majDispatch } from 'reducers/maj.reducer'

export const MajProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <majDispatch.Provider value={dispatch}>
      <majState.Provider value={state}>
        {children}
      </majState.Provider>
    </majDispatch.Provider>
  )
}
