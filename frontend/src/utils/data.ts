import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'
import useSWRMutation from 'swr/mutation'

import { Favorite, Song } from './types'

export const ROOT = 'http://localhost:3004'
export const FAVORITES_PATH = 'favorites'
const SONGS_PATH = 'songs'
export const LIMIT = 20

export const fetcher = async <T>(input: RequestInfo, init: RequestInit) => {
  const res = await fetch(input, init)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')

    throw error
  }

  return res.json() as T
}

const sendRequest = async <T>(url: string, { arg }: { arg: { songId: string } }) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  })
  if (!res.ok) {
    const error = new Error('An error occurred while adding favorite.')

    throw error
  }

  return res.json() as T
}

const deleteRequest = async <T>(url: string) => {
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    const error = new Error('An error occurred while deleting favorite.')

    throw error
  }

  return res.json() as T
}

export const useSongs = (query: string) => {
  const { data, error, size, setSize, isLoading, isValidating } = useSWRInfinite<Song[], Error>(
    (index) => `${ROOT}/${SONGS_PATH}?_start=${LIMIT * index}&_limit=${LIMIT}${query}`,
    fetcher,
    { revalidateOnFocus: false }
  )
  return {
    data,
    isSongsLoading: isLoading,
    size,
    setSize,
    songsError: error,
    isValidating: isValidating,
  }
}

export const useFavorites = () => {
  const { data, error, isLoading } = useSWR<Favorite[], Error>(`${ROOT}/${FAVORITES_PATH}`, fetcher, {
    revalidateOnFocus: false,
  })

  return {
    favorites: data,
    isFavoriteLoading: isLoading,
    favoriteError: error,
  }
}

export const useAddFavorite = () => {
  const { trigger, isMutating } = useSWRMutation(`${ROOT}/${FAVORITES_PATH}`, sendRequest<Record<string, never>>)

  return {
    addFavorite: trigger,
    isAddingFavorite: isMutating,
  }
}

export const useDeleteFavorite = (id: string) => {
  const { trigger, isMutating } = useSWRMutation(
    `${ROOT}/${FAVORITES_PATH}/${id}`,
    deleteRequest<Record<string, never>>
  )

  return {
    deleteFavorite: trigger,
    isDeletingFavorite: isMutating,
  }
}
