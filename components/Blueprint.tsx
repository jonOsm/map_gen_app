import { type Grid, type TileStyleMap, TILE } from "@/interfaces/blueprint"
import Tile from "./Tile"
import Legend from "./Legend"
import HomeHeader from "./HomeHeader"
import GenBPButton from "./GenBPButton"

interface BlueprintProps {
  grid: Grid
}

export default function Blueprint({ grid }: BlueprintProps) {
  const styleMap = {
    // [TILE.VOID]: { style: "bg-black", label: "Void" },
    [TILE.LAND]: { style: "bg-green-600", label: "Land" },
    [TILE.WALL]: { style: "bg-slate-600", label: "Wall" },
    [TILE.FLOOR]: { style: "bg-neutral-600", label: "Floor" },
  } as TileStyleMap

  const render = grid.map((row: Array<TILE>, i: number) => {
    return (
      <>
        <div key={i} className="flex py-0">
          {row.map((val: TILE, i: number) => {
            return <Tile key={i} tileType={val} styleMap={styleMap} />
          })}
        </div>
      </>
    )
  })

  return (
    <div className="relative flex">
      <div className="flex flex-col items-center">
        <HomeHeader></HomeHeader>
        <div className="basis-auto ">{render}</div>
        <GenBPButton></GenBPButton>
      </div>
      <div className="px-3">
        <Legend styleMap={styleMap} />
      </div>
    </div>
  )
}
