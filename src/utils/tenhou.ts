

// 牌面代码转天凤字符串
export function tilesToTenhou(tiles: number[]) {
  const getType = (tile: number) => Math.floor((tile - 1) / 9)
  const getNum = (tile: number) => (((tile - 1) % 9) + 1)

  const m = Array<number>()
  const p = Array<number>()
  const s = Array<number>()
  const z = Array<number>()

  tiles.map(tile => {
    switch (getType(tile)) {
      case 0: return m.push(getNum(tile))
      case 1: return p.push(getNum(tile))
      case 2: return s.push(getNum(tile))
      case 3: return z.push(getNum(tile))
    }
  })

  const mStr = m.length > 0 ? m.join("") + "m" : ""
  const pStr = p.length > 0 ? p.join("") + "p" : ""
  const sStr = s.length > 0 ? s.join("") + "s" : ""
  const zStr = z.length > 0 ? z.join("") + "z" : ""

  return [mStr, pStr, sStr, zStr].join("")
}


// 天凤字符串转牌面代码
export function tenhouToTiles(tenhou: string) {
  const t = Array<number>()

  const m = Array<number>()
  const p = Array<number>()
  const s = Array<number>()
  const z = Array<number>()

  tenhou.split("").map((ch => {
    if (!isNaN(Number(ch))) {
      t.push(parseInt(ch))
    } else if (ch === 'm') {
      m.push(...t)
      t.splice(0, t.length)
    } else if (ch === 'p') {
      p.push(...[...t].map(n => n + 9))
      t.splice(0, t.length)
    } else if (ch === 's') {
      s.push(...[...t].map(n => n + 18))
      t.splice(0, t.length)
    } else if (ch === 'z') {
      z.push(...[...t].map(n => n + 27))
      t.splice(0, t.length)
    }
  }))

  return [...m, ...p, ...s, ...z]
}
