import { TILE } from "@/interfaces/blueprint"

export default function Tile({ tileType }: { tileType: TILE }) {
  const styleMap = {
    [TILE.VOID]: "bg-black",
    [TILE.LAND]: "bg-green-600",
    [TILE.WALL]: "bg-slate-600",
    [TILE.FLOOR]: "bg-brown-600",
  }
  return (
    <div
      className={"w-5 h-5 p2 border border-white " + styleMap[tileType]}
    ></div>
  )
}
