import { type TileStyleMap, TILE } from "@/interfaces/blueprint"

interface TileProps {
  tileType: TILE
  styleMap: TileStyleMap
}
export default function Tile({ tileType, styleMap }: TileProps) {
  return (
    <div
      className={"w-5 h-5 p2 border border-white " + styleMap[tileType].style}
    ></div>
  )
}
