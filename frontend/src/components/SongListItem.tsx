import { useState } from 'react'

import { getFavoriteId, isFavorite } from '../utils/favorites'
import { Favorite, Song } from '../utils/types'
import FavoriteButton from './FavoriteButton'
import Level from './Level'

interface Props {
  song: Song
  showFavoriteAddingError: (state: boolean) => void
  showFavoriteDeletingError: (state: boolean) => void
  setAddFavoriteSuccess: (state: boolean) => void
  setDeleteFavoriteSuccess: (state: boolean) => void
  hasFavoriteError: boolean
  favorites: Favorite[] | undefined
}

const SongListItem = ({
  song,
  showFavoriteAddingError,
  showFavoriteDeletingError,
  setAddFavoriteSuccess,
  setDeleteFavoriteSuccess,
  hasFavoriteError,
  favorites,
}: Props): React.ReactElement => {
  const [imageError, setImageError] = useState(false)

  return (
    <li key={song.id} className="w-full h-20 odd:bg-grey-1 odd:bg-opacity-10 flex items-center pl-2.5">
      <img
        className="w-16 h-16"
        src={imageError ? '../src/assets/placeholder.jpg' : song.images}
        alt=""
        onError={(): void => setImageError(true)}
      />
      <div className="flex flex-col flex-1 ml-4 sm:ml-10 min-w-0">
        <h2 className="text-ellipsis overflow-hidden whitespace-nowrap font-bold text-sm mb-1">
          {song.title}
        </h2>
        <p className="text-ellipsis overflow-hidden whitespace-nowrap font-light text-sm">
          {song.artist}
        </p>
      </div>
      <div className="flex ml-auto gap-1 sm:gap-5">
        <Level level={song.level} id={song.id} />
        <FavoriteButton
          songId={song.id}
          isFavorite={isFavorite(song.id, favorites, hasFavoriteError)}
          favoriteId={getFavoriteId(song.id, favorites, hasFavoriteError)}
          showFavoriteAddingError={(state): void => showFavoriteAddingError(state)}
          showFavoriteDeletingError={(state): void => showFavoriteDeletingError(state)}
          setDeleteFavoriteSuccess={(state): void => setDeleteFavoriteSuccess(state)}
          setAddFavoriteSuccess={(state): void => setAddFavoriteSuccess(state)}
          hasFavoriteError={hasFavoriteError}
        />
      </div>
    </li>
  )
}

export default SongListItem
