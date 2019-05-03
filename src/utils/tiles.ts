
export const initialTiles = [1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 30]

// 补充手牌
export function fillHand(tiles: number[]): number[] {
  const isFullHand = tiles.length % 3 === 2
  return isFullHand ? tiles.sort() : fillHand([...tiles, generateRandomTile()])
}

// 随机牌
export function generateRandomTile() {
  return randomIntFromInterval(1, 34)
}

// 随机数
export function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
