import { render, screen } from '@testing-library/react'

import SongsPage from '../components/SongsPage'
import { ui } from '../utils/uiStrings'
import { mockFavorite, mockSong } from './mocks'

const props = {
  isSongsLoading: false,
  songs: [mockSong({ id: '1' }), mockSong({ id: '2' }), mockSong({ id: '3' })],
  hasSongsError: false,
  isFavoriteLoading: false,
  hasFavoriteError: false,
  favorites: [mockFavorite()],
  isReachingEnd: false,
  isValidating: false,
  loadMore: vi.fn(),
}

describe('SongsPage', () => {
  it('renders the song list and no errors', () => {
    render(<SongsPage {...props} />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    const alert = screen.queryByRole('alert')
    expect(alert).not.toBeInTheDocument()
  })

  it('renders an alert when no songs are found', () => {
    render(<SongsPage {...props} songs={[]} />)
    const alert = screen.getByText(ui.notFound)
    expect(alert).toBeInTheDocument()
  })

  it('renders an error if favorite loading fails', () => {
    render(<SongsPage {...props} hasFavoriteError />)
    const error = screen.getByText(ui.favoriteLoadingError)
    expect(error).toBeInTheDocument()
  })

  it('renders an error if initial song loading fails', () => {
    render(<SongsPage {...props} hasSongsError songs={[]} />)
    const error = screen.getByText(ui.errorLoadingSongs)
    expect(error).toBeInTheDocument()
  })

  it('renders loading indicator when songs are loading', () => {
    render(<SongsPage {...props} isSongsLoading />)
    const loadingIndicator = screen.getByText(ui.loading)
    expect(loadingIndicator).toBeInTheDocument()
  })
})
