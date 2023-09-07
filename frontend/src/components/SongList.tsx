import { Favorite, Song } from '../utils/types'
import SongListItem from './SongListItem'

interface Props {
  songs: Song[]
  favorites: Favorite[] | undefined
  hasFavoriteError: boolean
  showFavoriteAddingError: (state: boolean) => void
  showFavoriteDeletingError: (state: boolean) => void
  setAddFavoriteSuccess: (state: boolean) => void
  setDeleteFavoriteSuccess: (state: boolean) => void
}

const SongList = ({
  songs,
  favorites,
  hasFavoriteError,
  showFavoriteAddingError,
  showFavoriteDeletingError,
  setAddFavoriteSuccess,
  setDeleteFavoriteSuccess,
}: Props): React.ReactElement => {
  return (
    <ul>
      {songs.map((song) => (
        <SongListItem
          key={song.id}
          song={song}
          favorites={favorites}
          showFavoriteAddingError={(state): void => showFavoriteAddingError(state)}
          showFavoriteDeletingError={(state): void => showFavoriteDeletingError(state)}
          setDeleteFavoriteSuccess={(state): void => setDeleteFavoriteSuccess(state)}
          setAddFavoriteSuccess={(state): void => setAddFavoriteSuccess(state)}
          hasFavoriteError={hasFavoriteError}
        />
      ))}
    </ul>
  )
}

export default SongList
