export enum TILE {
  VOID = -1,
  LAND = 0,
  WALL = 1,
  FLOOR = 2,
}

export type Grid = Array<Array<TILE>>