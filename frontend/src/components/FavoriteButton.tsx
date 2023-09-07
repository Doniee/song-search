import cn from 'classnames'
import { useEffect, useState } from 'react'
import { useSWRConfig } from 'swr'

import { ReactComponent as FavoriteActiveIcon } from '../assets/icons/favorite.svg'
import { ReactComponent as FavoriteIcon } from '../assets/icons/favorite_border.svg'
import { FAVORITES_PATH, ROOT, useAddFavorite, useDeleteFavorite } from '../utils/data'
import { ui } from '../utils/uiStrings'

interface Props {
  isFavorite: boolean
  songId: string
  favoriteId: string
  showFavoriteAddingError: (state: boolean) => void
  showFavoriteDeletingError: (state: boolean) => void
  setAddFavoriteSuccess: (state: boolean) => void
  setDeleteFavoriteSuccess: (state: boolean) => void
  hasFavoriteError: boolean
}

const FavoriteButton = ({
  isFavorite,
  songId,
  favoriteId = '',
  showFavoriteAddingError,
  showFavoriteDeletingError,
  setAddFavoriteSuccess,
  setDeleteFavoriteSuccess,
  hasFavoriteError,
}: Props): React.ReactElement => {
  const [addFavoriteError, setAddFavoriteError] = useState(false)
  const [deleteFavoriteError, setDeleteFavoriteError] = useState(false)
  const { addFavorite, isAddingFavorite } = useAddFavorite()
  const { deleteFavorite, isDeletingFavorite } = useDeleteFavorite(favoriteId)
  const { mutate } = useSWRConfig()

  useEffect(() => {
    if (addFavoriteError) {
      showFavoriteAddingError(true)
      setAddFavoriteError(false)
    }
    if (deleteFavoriteError) {
      showFavoriteDeletingError(true)
      setDeleteFavoriteError(false)
    }
  }, [addFavoriteError, deleteFavoriteError, showFavoriteDeletingError, showFavoriteAddingError])

  const handleAddFavorite = async (songId: string): Promise<void> => {
    try {
      await addFavorite({ songId: songId })
      setAddFavoriteSuccess(true)
    } catch (e) {
      setAddFavoriteError(true)
    }
  }

  const handleDeleteFavorite = async (): Promise<void> => {
    try {
      await deleteFavorite()
      void mutate(`${ROOT}/${FAVORITES_PATH}`)
      setDeleteFavoriteSuccess(true)
    } catch (e) {
      setDeleteFavoriteError(true)
    }
  }

  const handleFavoriteClick = (isFavorite: boolean, songId: string, favoriteId: string): void => {
    showFavoriteDeletingError(false)
    showFavoriteAddingError(false)
    if (isFavorite && favoriteId !== '') {
      void handleDeleteFavorite()
    } else {
      void handleAddFavorite(songId)
    }
  }

  return (
    <button
      disabled={isAddingFavorite || isDeletingFavorite || hasFavoriteError}
      className={cn(
        'group h-full p-3 sm:m-2 hover:scale-125 transition-all focus-outline focus-visible:outline-offset-0',
        {
          'animate-ping': isAddingFavorite || isDeletingFavorite,
        }
      )}
      onClick={(): void => handleFavoriteClick(isFavorite, songId, favoriteId)}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? ui.deleteFavorite : ui.addFavorite}
    >
      {isFavorite ? (
        <FavoriteActiveIcon className="text-red" />
      ) : (
        <FavoriteIcon className="text-grey-1 group-hover:text-red" />
      )}
    </button>
  )
}

export default FavoriteButton
