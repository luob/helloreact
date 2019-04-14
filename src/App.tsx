import React, { useState, FC } from 'react'

import { tilesToTenhon } from 'utils/tile.util'

const initialTiles = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 33, 33, 33]

export const App: FC = () => {
  const [tiles, setTiles] = useState(initialTiles)
  const [option, setOption] = useState({})
  const [isloading, setIsLoading] = useState(false)
  const [result, setResult] = useState({})
  const setTile = (tile: number) => {
    setTiles([...tiles, tile].sort())
  }
  const calcTempai = () => {
  }
  const calcShanten = () => {

  }
  return (
    <div className="app">
      <div className="logs">
        <div className="tiles">
          {tiles.map((tile, i) => (
            <div className="tile" key={i}>
              <img src={`./image/mahjong/${tile}.png`} alt="" />
            </div>
          ))}
        </div>
        <div className="result"></div>
      </div>
      <div className="board">
      </div>
    </div >
  )
}
