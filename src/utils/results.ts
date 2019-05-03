
declare function calc(hand: string): string

enum Errors {
  errCalcHand = "手牌解析错误",
  errNoResult = "没有结果"
}

export type Result = {
  tile: number
  shanten: number
  improves: number[]
}

export function getResults(hand: string): Result[] {
  let resultsStr
  try {
    resultsStr = calc(hand)
  } catch (err) {
    throw new Error(Errors.errCalcHand)
  }

  let results: Result[]
  try {
    results = JSON.parse(resultsStr)
  } catch (err) {
    throw new Error(Errors.errNoResult)
  }
  if (results.length < 1) {
    throw new Error(Errors.errNoResult)
  }

  const compareShanten = (a: Result, b: Result) => a.shanten - b.shanten
  results = results.sort(compareShanten)
  return results
}
