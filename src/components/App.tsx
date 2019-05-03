import React, { useState, FC } from 'react'

import { tilesToTenhou, tenhouToTiles } from 'utils/tenhou'
import { fillHand } from 'utils/tiles'
import { getResults, Result } from 'utils/results'

import { MajInput } from 'components/MajInput'
import { MajHand } from 'components/MajHand'
import { MajResult } from 'components/MajResult'

const initialTiles = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 30]

export const App: FC = () => {
  const [tiles, setTiles] = useState(initialTiles)
  const [errMsg, setErrMsg] = useState("")
  const [results, setResults] = useState(Array<Result>())

  const startWith = (inputTiles: number[]) => {
    setErrMsg("")
    const fullHand = fillHand(inputTiles)
    setTiles(fullHand)
    const tenhouStr = tilesToTenhou(fullHand)
    try {
      const results = getResults(tenhouStr)
      setResults(results)
    } catch (err) {
      setErrMsg("牌效计算错误, 请检查输入值")
    }
  }
  return (
    <div className="app">
      <MajInput tiles={tiles} startWith={startWith} />
      <MajHand tiles={tiles} />
      <MajResult results={results} errMsg={errMsg} />
    </div>
  )
}

