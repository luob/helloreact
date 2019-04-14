import React, { FC } from "react"

// import { useMajState, useMajDispatch } from "reducers/maj.reducer";
// import { tilesToTenhon } from "utils/tile.util"

// export const MajInput: FC = ({ }) => {
//   const { tiles, option } = useMajState()
//   const dispatch = useMajDispatch()
//   const calcTempai = () => {
//     dispatch({ type: 'SET_TILES', tiles: tiles })
//     // do search
//   }
//   return (
//     <div className="input">
//       <div className="input__tiles">
//         {tiles.map((tile, i) => (
//           <div className="tile" key={i}>
//             <img src={`./image/mahjong/${tile}.png`} alt="" />
//           </div>
//         ))}
//       </div>
//       <div className="input__tenhon">
//         {tilesToTenhon(tiles)}
//       </div>
//       <div className="input__buttons">
//         <button onClick={() => calcTempai()}>计算听牌</button>
//         <button onClick={() => calcTempai()}>计算牌效</button>
//       </div>
//       <div className="">
//     </div>
//   )
// }
