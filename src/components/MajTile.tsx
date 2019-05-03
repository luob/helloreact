import React, { FC } from 'react'
import { number } from 'prop-types';


type MajTilesProps = {
  tiles: number[] | number
}

export const MajTiles: FC<MajTilesProps> = ({ tiles }) => {
  if (typeof tiles === 'number') {
    tiles = [tiles] as number[]
  }
  const Tiles = tiles.map((tile: number, key: number) => (
    <div className="maj-tile" key={key}>
      <img src={`./image/mahjong/${tile}.png`} alt="" />
    </div>
  ))
  return (
    <div className="maj-tile-list">
      {Tiles}
    </div>
  )
}
