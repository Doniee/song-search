import { render, screen } from '@testing-library/react'

import SongList from '../components/SongList'
import { mockFavorite, mockSong } from './mocks'

const props = {
  songs: [mockSong({ id: '1' }), mockSong({ id: '2' }), mockSong({ id: '3' })],
  favorites: [mockFavorite()],
  hasFavoriteError: false,
  showFavoriteAddingError: vi.fn(),
  showFavoriteDeletingError: vi.fn(),
  setAddFavoriteSuccess: vi.fn(),
  setDeleteFavoriteSuccess: vi.fn(),
}

describe('SongList', () => {
  it('renders the list', () => {
    render(<SongList {...props} />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('renders list items', async () => {
    render(<SongList {...props} />)
    const songs = await screen.findAllByRole('listitem')
    expect(songs).toHaveLength(3)
  })
})
