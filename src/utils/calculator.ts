
declare function calc(hand: string): string

enum Message {
  errCalcHand = "手牌解析错误",
  errNoResult = "没有结果"
}

export type EffResultCase = {
  tile: number
  shanten: number
  improves: number[]
}

export type Case = EffResultCase

export type EffResult = {
  errMsg: string
  cases: Case[]
}

export function getEffResult(hand: string): EffResult {
  let errMsg = ""
  let cases: Case[] = []
  try {
    cases = calculate(hand)
  } catch (err) {
    errMsg = err.toString()
  }
  return { errMsg, cases }
}

function calculate(hand: string): Case[] {
  let casesStr = ""
  let cases: Case[] = []
  try {
    casesStr = calc(hand)
  } catch (err) {
    throw new Error(Message.errCalcHand)
  }

  try {
    cases = JSON.parse(casesStr)
  } catch (err) {
    throw new Error(Message.errNoResult)
  }

  if (cases.length < 1) {
    throw new Error(Message.errNoResult)
  }

  const compareShanten = (a: Case, b: Case) => a.shanten - b.shanten
  cases = cases.sort(compareShanten)

  return cases
}
