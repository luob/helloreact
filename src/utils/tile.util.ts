// 牌面代码转天凤字符串
export function tilesToTenhon(tiles: number[]) {
  const getType = (tile: number) => Math.floor((tile - 1) / 9)
  const getNum = (tile: number) => (((tile - 1) % 9) + 1)

  const m = tiles.filter(tile => getType(tile) == 0).map(tile => getNum(tile))
  const p = tiles.filter(tile => getType(tile) == 1).map(tile => getNum(tile))
  const s = tiles.filter(tile => getType(tile) == 2).map(tile => getNum(tile))
  const z = tiles.filter(tile => getType(tile) == 3).map(tile => getNum(tile))

  const mStr = m.length > 0 ? m.join("") + "m" : ""
  const pStr = p.length > 0 ? p.join("") + "p" : ""
  const sStr = s.length > 0 ? s.join("") + "s" : ""
  const zStr = z.length > 0 ? z.join("") + "z" : ""

  return [mStr, pStr, sStr, zStr].join("")
}


// 天凤字符串转牌面代码
export function tenhonToTiles(tenhon: string) {
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
