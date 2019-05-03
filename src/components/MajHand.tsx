import React, { FC } from 'react'
import { MajTile } from './MajTile'

export const MajHand: FC<{ tiles: number[] }> = ({ tiles }) => {
  return (
    <div className="maj-hand">
      {tiles.map((tile, i) =>
        <MajTile tile={tile} key={i} />)
      }
    </div>
  )
}
