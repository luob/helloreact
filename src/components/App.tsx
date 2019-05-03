import React, { useState, FC, Dispatch } from 'react'

import { tilesToTenhou, tenhouToTiles } from 'utils/tenhou'
import { initialTiles } from 'utils/tiles'
import { fillHand } from 'utils/tiles'
import { getEffResult, } from 'utils/calculator'

import { MajInput } from 'components/MajInput'
import { MajOutput } from 'components/MajOutput'

export const App: FC = () => {
  const [tiles, setTiles] = useState(initialTiles)


  const result = getEffResult(tilesToTenhou(tiles))

  return (
    <div className="app">
      <MajInput tiles={tiles} setTiles={setTiles} />
      <MajOutput result={result} />
    </div>
  )
}

