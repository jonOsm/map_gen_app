import {
  type TileStyleMap,
  type TileStyleDetails,
  TILE,
} from "@/interfaces/blueprint"

interface LengendProps {
  styleMap: TileStyleMap
}

export default function Legend({ styleMap }: LengendProps) {
  return (
    <div className="flex flex-col">
      <div>Legend:</div>
      <div className="flex gap-2">
        {Object.entries(styleMap).map(
          ([key, details]: [string, TileStyleDetails]) => {
            return (
              <div key={key} className="flex gap-2">
                <div
                  className={"w-5 h-5 sm:w-10 sm:h-10 " + details.style}
                ></div>
                <div>{details.label}</div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}
