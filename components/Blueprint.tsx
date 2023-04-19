import { type Grid, TILE } from "@/interfaces/blueprint"
import Tile from "./Tile"

interface BlueprintProps {
  grid: Grid
}

export default function Blueprint({ grid }: BlueprintProps) {
  const render = grid.map((row: Array<TILE>) => {
    return (
      <div className="flex py-0">
        {row.map((val: TILE) => {
          return <Tile tileType={val} />
        })}
      </div>
    )
  })

  return <div>{render}</div>
}
