import { useEffect, useState } from 'react'

import { LIMIT, useFavorites, useSongs } from '../utils/data'
import { Song } from '../utils/types'
import SongsPage from './SongsPage'

interface Props {
  query: string
}

const Songs = ({ query }: Props): React.ReactElement => {
  const { data, isSongsLoading, size, setSize, songsError, isValidating } = useSongs(query)
  const { favorites, isFavoriteLoading, favoriteError } = useFavorites()
  const [songs, setSongs] = useState<Song[]>([])

  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < LIMIT)

  useEffect(() => {
    const allSongs = data ? data.flat() : []
    setSongs(allSongs)
  }, [data])

  const loadMore = (): void => {
    void setSize(size + 1)
  }

  return (
    <SongsPage
      isSongsLoading={isSongsLoading}
      songs={songs}
      hasSongsError={!!songsError}
      isFavoriteLoading={isFavoriteLoading}
      hasFavoriteError={!!favoriteError}
      favorites={favorites}
      isReachingEnd={isReachingEnd}
      isValidating={isValidating}
      loadMore={() => loadMore()}
    />
  )
}

export default Songs
