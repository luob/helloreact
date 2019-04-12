import React, { FC, useState, Dispatch } from "react"
import { State, Action } from "./App.reducer"

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
          <img src={`./image/mahjong/${tile}.png`} alt="" />
        </div>
      ))}
    </div>
    <div className="input-tenhon">
      {tilesToTenhon(tiles)}
    </div>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
      <button
        key={i}
        onClick={() => setTiles([...tiles, v].sort())}
      >{v}万</button>
    })}
  </>)
}

// 牌面代码转天凤字符串
function tilesToTenhon(tiles: number[]) {
  const m = tiles.filter(tile => tile % 9 != 0)
  const p = tiles.filter(tile => tile % 9 != 1)
  const s = tiles.filter(tile => tile % 9 != 2)
  const z = tiles.filter(tile => tile % 9 != 3)
  return [...m, "m", ...p, "p", ...s, "s", ...z, "z"].join()
}

// 天凤字符串转牌面代码
function tenhonToTiles(tenhon: string) {
  const mMatch = tenhon.match(/^[1-9]*(?=m)/)
  const pMatch = tenhon.match(/[^|m][1-9]*(?=m)/)
  const sMatch = tenhon.match(/[^|m|p][1-9]*(?=m)/)
  const zMatch = tenhon.match(/[^|m|p|s][1-9]*(?=m)/)
  const mStr = mMatch ? mMatch[0] : ""
  const pStr = pMatch ? pMatch[0] : ""
  const sStr = sMatch ? sMatch[0] : ""
  const zStr = zMatch ? zMatch[0] : ""
  const m = mStr.split("").map(n => Number(n))
  const p = pStr.split("").map(n => Number(n) + 9)
  const s = sStr.split("").map(n => Number(n) + 18)
  const z = sStr.split("").map(n => Number(n) + 27)
  return [...m, ...p, ...s, ...z]
}
