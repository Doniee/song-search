import { render, screen } from '@testing-library/react'

import SongListItem from '../components/SongListItem'
import { mockFavorite, mockSong } from './mocks'

const props = {
  song: mockSong(),
  showFavoriteAddingError: vi.fn(),
  showFavoriteDeletingError: vi.fn(),
  setAddFavoriteSuccess: vi.fn(),
  setDeleteFavoriteSuccess: vi.fn(),
  hasFavoriteError: false,
  favorites: [mockFavorite()],
}

describe('SongListItem', () => {
  it('renders the song title', () => {
    render(<SongListItem {...props} />)
    const songTitle = screen.getByText(/song name/i)
    expect(songTitle).toBeInTheDocument()
  })

  it('renders album cover image', () => {
    render(<SongListItem {...props} />)
    const songImage = screen.getByAltText('')
    expect(songImage).toHaveAttribute(
      'src',
      'https://d3mzlbmn9ukddk.cloudfront.net/web-assignment/artists/images/70b75daa-eb02-4dd8-8763-116dd88cda7f.png'
    )
  })
})
