export type Song = {
  id: string
  title: string
  artist: string
  images: string
  level: number
  search: string
}

export type Favorite = {
  id: string
  songId: string
}

export type LevelFilter = {
  level: number
  active: boolean
}
