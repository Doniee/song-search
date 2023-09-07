import { useEffect, useState } from 'react'

import { Favorite, Song } from '../utils/types'
import { ui } from '../utils/uiStrings'

interface Props {
  isValidating: boolean
  hasFavoriteError: boolean
  hasSongsError: boolean
  isReachingEnd: boolean | undefined
  songs: Song[]
  isFavoriteLoading: boolean
  favorites: Favorite[] | undefined
  addFavoriteSuccess: boolean
  deleteFavoriteSuccess: boolean
}

const AriaLive = ({
  isValidating,
  hasFavoriteError,
  hasSongsError,
  isReachingEnd,
  songs,
  isFavoriteLoading,
  favorites,
  addFavoriteSuccess,
  deleteFavoriteSuccess,
}: Props): React.ReactElement => {
  const [ariaLiveText, setAriaLiveText] = useState('')
  const [favoriteLoadingError, setFavoriteLoadingError] = useState(false)

  useEffect(() => {
    if (isValidating) setAriaLiveText(ui.ariaLive.loadingSongs)
  }, [isValidating])

  useEffect(() => {
    if (addFavoriteSuccess) {
      setAriaLiveText(ui.ariaLive.favAdded)
    }
  }, [addFavoriteSuccess])

  useEffect(() => {
    if (deleteFavoriteSuccess) {
      setAriaLiveText(ui.ariaLive.favRemoved)
    }
  }, [deleteFavoriteSuccess])

  useEffect(() => {
    if (hasFavoriteError) setFavoriteLoadingError(true)
  }, [hasFavoriteError])

  useEffect(() => {
    if (!isValidating && !hasSongsError && songs.length > 0) {
      const more = !isReachingEnd ? `, ${ui.ariaLive.scrollToLoadMore}` : ''
      const songsString = songs.length > 1 ? ui.ariaLive.songs : ui.ariaLive.song
      setAriaLiveText(`${ui.ariaLive.found} ${songs.length} ${songsString}${more}`)
    }
  }, [isReachingEnd, isValidating, songs, hasSongsError])

  useEffect(() => {
    if (!isFavoriteLoading && !hasFavoriteError && favoriteLoadingError && favorites && favorites.length > 0) {
      setAriaLiveText(ui.ariaLive.favsLoaded)
      setFavoriteLoadingError(false)
    }
  }, [hasFavoriteError, isFavoriteLoading, favorites, favoriteLoadingError])

  return (
    <>
      <div aria-live="polite" className="sr-only" aria-relevant="all" aria-atomic>
        {ariaLiveText}
      </div>
    </>
  )
}

export default AriaLive
