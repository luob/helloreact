import React, { useState, FC, ChangeEventHandler } from "react"

import { tilesToTenhou, tenhouToTiles } from "utils/tenhou"

type Props = {
  tiles: number[]
  startWith: (tiles: number[]) => void
}

export const MajInput: FC<Props> = ({ tiles, startWith }) => {
  const [tenhouStr, setTenhouStr] = useState(tilesToTenhou(tiles))
  const onChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setTenhouStr(evt.target.value)
  }
  const submit = () => {
    console.log(tenhouStr)
    startWith(tenhouToTiles(tenhouStr))
  }
  return (
    <div className="input-tenhou">
      <input type="text" value={tenhouStr} onChange={onChange} />
      <button onClick={submit}> 计算</button>
    </div>
  )
}

