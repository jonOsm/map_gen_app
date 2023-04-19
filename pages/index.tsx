import HomeHeader from "@/components/HomeHeader"
import Blueprint from "@/components/Blueprint"
import GenBPButton from "@/components/GenBPButton"
import { useState } from "react"
import { type Grid, TILE } from "@/interfaces/blueprint"

//eventually exposed by MAP_GEN library

function initialGrid(): Grid {
  let grid = [] as Array<Array<TILE>>
  let w = 40
  let h = 30
  for (let y = 0; y < h; y++) {
    grid.push([])
    for (let x = 0; x < w; x++) {
      grid[y].push(0)
    }
  }
  return grid
}

export default function home() {
  const [grid, setGrid] = useState(initialGrid())

  return (
    <main className="flex flex-col items-center justify-center h-screen -my-10">
      <HomeHeader></HomeHeader>
      <Blueprint grid={grid}></Blueprint>
      <GenBPButton></GenBPButton>
    </main>
  )
}
