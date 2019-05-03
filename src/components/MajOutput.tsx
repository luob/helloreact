import React, { FC } from "react"

import { MajTiles } from './MajTiles'
import { EffResult, Case } from 'utils/calculator'

type Props = {
  result: EffResult
}

export const MajOutput: FC<Props> = ({ result }) => {
  const ErrMsg = (
    <div className="error">
      <p>{result.errMsg}</p>
    </div>
  )
  const Cases = result.cases.map((result, i) => (
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
        <MajTiles tiles={result.improves} />
      </div>
    </div>
  ))

  const hasErr = result.errMsg !== ""
  const Result = hasErr ? ErrMsg : Cases

  return (
    <div className="maj-output">
      {Result}
    </div>
  )
}
