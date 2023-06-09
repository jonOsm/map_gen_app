import { type TileStyleMap, TILE } from "@/interfaces/blueprint"

interface TileProps {
  tileType: TILE
  styleMap: TileStyleMap
}
export default function Tile({ tileType, styleMap }: TileProps) {
  return (
    <div
      className={
        "w-2 h-2 sm:w-5 sm:h-5 border-white " + styleMap[tileType].style
      }
    ></div>
  )
}
