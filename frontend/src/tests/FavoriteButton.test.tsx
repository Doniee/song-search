import { render, screen } from '@testing-library/react'

import FavoriteButton from '../components/FavoriteButton'
import { ui } from '../utils/uiStrings'

const props = {
  isFavorite: true,
  songId: '5b8e47deb3984c68ed8192e3',
  favoriteId: '5d10ceca6ea3f34582f71e7a',
  showFavoriteAddingError: vi.fn(),
  showFavoriteDeletingError: vi.fn(),
  setDeleteFavoriteSuccess: vi.fn(),
  setAddFavoriteSuccess: vi.fn(),
  hasFavoriteError: false,
}

describe('Active favorite', () => {
  beforeEach(() => {
    render(<FavoriteButton {...props} />)
  })

  it('renders an active favorite component and not an inactive one', () => {
    const deleteFavorite = screen.getByLabelText(ui.deleteFavorite)
    const addFavorite = screen.queryByLabelText(ui.addFavorite)
    expect(deleteFavorite).toBeInTheDocument()
    expect(addFavorite).not.toBeInTheDocument()
  })

  it('renders aria-pressed correctly', () => {
    const favorite = screen.getByLabelText(ui.deleteFavorite)
    expect(favorite).toHaveAttribute('aria-pressed', 'true')
  })
})

describe('Inactive favorite', () => {
  beforeEach(() => {
    render(<FavoriteButton {...props} isFavorite={false} />)
  })

  it('renders an inactive favorite component and not an active one', () => {
    const deleteFavorite = screen.queryByLabelText(ui.deleteFavorite)
    const addFavorite = screen.getByLabelText(ui.addFavorite)
    expect(addFavorite).toBeInTheDocument()
    expect(deleteFavorite).not.toBeInTheDocument()
  })

  it('renders aria-pressed correctly', () => {
    const favorite = screen.getByLabelText(ui.addFavorite)
    expect(favorite).toHaveAttribute('aria-pressed', 'false')
  })
})
