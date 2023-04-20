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
    <>
      <p>Legend:</p>
      <div className="flex flex-col gap-2">
        {Object.entries(styleMap).map(
          ([key, details]: [string, TileStyleDetails]) => {
            return (
              <div key={key} className="flex gap-2">
                <div className={"w-10 h-10 " + details.style}></div>
                <div>{details.label}</div>
              </div>
            )
          }
        )}
      </div>
    </>
  )
}
