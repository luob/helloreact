import React, { FC } from "react"

import { MajTiles } from './MajTile'
import { Result } from 'utils/results'

type Props = {
  results: Result[]
  errMsg: string
}

export const MajResult: FC<Props> = ({ results, errMsg }) => {
  const ErrMsg = (
    <div className="error">
      < p > {errMsg}</p >
    </div >
  )
  const ResultCases = results.map((result, i) => (
    <div className="result-case" key={i}>
      <div className="shanten">
        <p>{result.shanten}向听: </p>
      </div>
      <div className="drop">
        <MajTiles tiles={result.tile} />
      </div>
      <div className="chance">
        {/* 预留概率显示 */}
      </div>
      <div className="improves">
        <MajTiles tiles={result.improves} />)}
      </div>
    </div>
  ))

  const hasErr = errMsg !== ""
  const Result = hasErr ? ErrMsg : ResultCases

  return (
    <div className="maj-result">
      {Result}
    </div>
  )
}
