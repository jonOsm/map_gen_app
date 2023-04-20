import HomeHeader from "@/components/HomeHeader"
import Blueprint from "@/components/Blueprint"
import GenBPButton from "@/components/GenBPButton"
import { useState } from "react"
import { type Grid, TILE } from "@/interfaces/blueprint"

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
  const [grid, setGrid] = useState(initialGrid())
  return (
    <main className="flex flex-col items-center justify-center h-screen -my-10">
      <Blueprint grid={grid}></Blueprint>
    </main>
  )
}
