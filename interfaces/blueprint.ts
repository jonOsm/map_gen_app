export enum TILE {
  VOID,
  LAND,
  WALL,
  FLOOR,
}

export type Grid = Array<Array<TILE>>

export interface TileStyleDetails {
  style: string
  label: string
}
export interface TileStyleMap {
  [s: number]: { style: string; label: string }
}
