import React, { useState, FC, Dispatch } from "react"

import { tilesToTenhou, tenhouToTiles } from "utils/tenhou"
import { initialTiles, fillHand } from 'utils/tiles'

import { MajTiles } from 'components/MajTiles'

type Props = {
  tiles: number[]
  setTiles: Dispatch<number[]>
}

export const MajInput: FC<Props> = ({ tiles, setTiles }) => {
  const [inputTiles, setInputTiles] = useState(initialTiles)
  return (
    <div className="maj-input">
      <div className="text">
        <input
          type="text"
          placeholder={tilesToTenhou(tiles)}
          onChange={evt => setInputTiles(tenhouToTiles(evt.target.value))}
        />
        <button onClick={() => setTiles(fillHand(inputTiles))} >计算</button>
      </div>
      <div className="hand">
        <MajTiles tiles={tiles} />
      </div>
    </div>
  )
}

