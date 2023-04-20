import { type Grid, type TileStyleMap, TILE } from "@/interfaces/blueprint"
import Tile from "./Tile"
import Legend from "./Legend"
import HomeHeader from "./HomeHeader"
import GenBPButton from "./GenBPButton"

interface BlueprintProps {
  grid: Grid,
  handleGenerateMap: Function
}

export default function Blueprint({ grid, handleGenerateMap }: BlueprintProps) {
  const styleMap = {
    // [TILE.VOID]: { style: "bg-black", label: "Void" },
    [TILE.LAND]: { style: "bg-green-600", label: "Land" },
    [TILE.WALL]: { style: "bg-slate-600", label: "Wall" },
    [TILE.FLOOR]: { style: "bg-slate-400", label: "Floor" },
  } as TileStyleMap

  const render = grid.map((row: Array<TILE>, i: number) => {
    return (
      <div key={Math.random()}>
        <div key={i} className="flex py-0">
          {row.map((val: TILE, i: number) => {
            return <Tile key={Math.random()} tileType={val} styleMap={styleMap} />
          })}
        </div>
      </div>
    )
  })

  return (
    <div className="">
      <div className="flex items-end justify-between mb-3">
        <Legend styleMap={styleMap} />
        <GenBPButton handleClick={handleGenerateMap}></GenBPButton>
      </div>
      <div className="flex flex-col items-center">
        {/* <HomeHeader></HomeHeader> */}
        <div className="basis-auto ">{render}</div>
      </div>
    </div>
  )
}
