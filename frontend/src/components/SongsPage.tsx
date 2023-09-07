import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Favorite, Song } from '../utils/types'
import { ui } from '../utils/uiStrings'
import { useTimer } from '../utils/utils'
import Alert from './Alert'
import AriaLive from './AriaLive'
import LoadingIndicator from './LoadingIndicator'
import SongList from './SongList'

interface Props {
  isSongsLoading: boolean
  songs: Song[]
  hasSongsError: boolean
  isFavoriteLoading: boolean
  hasFavoriteError: boolean
  favorites: Favorite[] | undefined
  isReachingEnd: boolean | undefined
  isValidating: boolean
  loadMore: () => void
}

const SongsPage = ({
  isSongsLoading,
  songs,
  hasSongsError,
  isFavoriteLoading,
  hasFavoriteError,
  favorites,
  isReachingEnd,
  isValidating,
  loadMore,
}: Props): React.ReactElement => {
  const [showFavoriteAddingError, setShowFavoriteAddingError] = useState(false)
  const [addFavoriteSuccess, setAddFavoriteSuccess] = useState(false)
  const [showFavoriteDeletingError, setShowFavoriteDeletingError] = useState(false)
  const [deleteFavoriteSuccess, setDeleteFavoriteSuccess] = useState(false)

  useEffect(() => {
    if (addFavoriteSuccess) {
      setAddFavoriteSuccess(false)
    }
  }, [addFavoriteSuccess])

  useEffect(() => {
    if (deleteFavoriteSuccess) {
      setDeleteFavoriteSuccess(false)
    }
  }, [deleteFavoriteSuccess])

  useTimer(showFavoriteDeletingError, () => setShowFavoriteDeletingError(false), 6000)
  useTimer(showFavoriteAddingError, () => setShowFavoriteAddingError(false), 6000)

  if (isSongsLoading && songs.length === 0) {
    return <LoadingIndicator />
  }

  if (hasSongsError && songs.length === 0) {
    return <Alert fixed retrying message={ui.errorLoadingSongs} />
  }

  if (Array.isArray(songs) && songs.length) {
    return (
      <>
        {!isFavoriteLoading && hasFavoriteError && <Alert fixed retrying message={ui.favoriteLoadingError} />}
        {showFavoriteAddingError && !hasFavoriteError && <Alert fixed message={ui.favoriteAddingError} />}
        {showFavoriteDeletingError && !hasFavoriteError && <Alert fixed message={ui.favoriteDeletingError} />}
        <InfiniteScroll
          dataLength={songs.length}
          next={(): void => loadMore()}
          hasMore={!isReachingEnd}
          loader={<LoadingIndicator />}
        >
          <SongList
            songs={songs}
            favorites={favorites}
            hasFavoriteError={!isFavoriteLoading && hasFavoriteError}
            showFavoriteAddingError={(state): void => setShowFavoriteAddingError(state)}
            showFavoriteDeletingError={(state): void => setShowFavoriteDeletingError(state)}
            setDeleteFavoriteSuccess={(state): void => setDeleteFavoriteSuccess(state)}
            setAddFavoriteSuccess={(state): void => setAddFavoriteSuccess(state)}
          />
        </InfiniteScroll>
        <AriaLive
          isValidating={isValidating}
          songs={songs}
          hasFavoriteError={hasFavoriteError}
          hasSongsError={hasSongsError}
          isReachingEnd={isReachingEnd}
          isFavoriteLoading={isFavoriteLoading}
          favorites={favorites}
          deleteFavoriteSuccess={deleteFavoriteSuccess}
          addFavoriteSuccess={addFavoriteSuccess}
        />
      </>
    )
  }

  return <Alert className="mb-2 mx-2 md:mx-0" message={ui.notFound} />
}

export default SongsPage
