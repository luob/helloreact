import React, { FC, useState, Dispatch } from "react"
import { State, Action } from "../app.reducer"

type Props = {
  state: State
  dispatch: Dispatch<Action>,
}

export const MajInput: FC<Props> = ({ state, dispatch }) => {
  const [tiles, setTiles] = useState(state.tiles)
  return (<>
    <div className="input-tiles">
      {tiles.map((tile, i) => (
        <div className="tile" key={i}>
          <img src={`./images/${tile}.png`} alt="" />
        </div>
      ))}
    </div>
    <button onClick={() => setTiles([...tiles, 1])} />
    <button onClick={() => setTiles([...tiles, 9])} />
  </>)
}
