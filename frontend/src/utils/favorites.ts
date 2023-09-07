import { Favorite } from './types'

export const isFavorite = (id: string, favorites: Favorite[] | undefined, favoriteError: boolean): boolean => {
  if (favorites === undefined || favoriteError) return false
  return favorites.some((favorite) => favorite.songId === id)
}
export const getFavoriteId = (id: string, favorites: Favorite[] | undefined, favoriteError: boolean): string => {
  if (isFavorite(id, favorites, favoriteError)) {
    const favorite = favorites?.filter((item) => item.songId === id)
    return favorite![0].id
  }
  return ''
}
