import HomeHeader from "@/components/HomeHeader"
import BlueprintComponent from "@/components/Blueprint"
import GenBPButton from "@/components/GenBPButton"
import { useState } from "react"
import { type Grid, TILE } from "@/interfaces/blueprint"
import Blueprint from "map_gen_ts_dev/lib/blueprint"
import { BlueprintBuilder } from "map_gen_ts_dev/lib/transformation"
import { Rect, RectFactory, ShapeConstraint, ShapeType } from "map_gen_ts_dev/lib/shape"

function yeesh() {
  const rectFactory = new RectFactory({
    minW: 4,
    maxW: 10,
    minH: 4,
    maxH: 10,
  })

  /**********Algo 1 **************/
  /*** Draw rects, union them, raw perimeter as outer wall, randomize inner wall*/
  const rects = rectFactory.generate(20)
  let blueprint = new Blueprint(40, 30)
  let bpBuilder = new BlueprintBuilder(blueprint)
  console.log("called directly")
  bpBuilder
    .addRandomRects(rects)
    .normalizeOuterWalls()
    .addWallsAtMapBoundary()
    .addRandomWalls(0.5)
  return blueprint.tiles
}

function initialGrid(
  w: number = 40,
  h: number = 30,
  defaultTile: TILE = 1
): Grid {
  let grid = [] as Array<Array<TILE>>
  for (let y = 0; y < h; y++) {
    grid.push([])
    for (let x = 0; x < w; x++) {
      grid[y].push(defaultTile)
    }
  }
  return grid
}

export default function Home() {
  const [grid, setGrid] = useState(yeesh())
  return (
    <main className="flex flex-col items-center justify-center h-screen -my-10">
      <BlueprintComponent grid={grid}></BlueprintComponent>
    </main>
  )
}
