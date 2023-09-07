import { render, screen } from '@testing-library/react'

import FilterButton from '../components/FilterButton'
import { ui } from '../utils/uiStrings'

const props = {
  activeFilters: [],
  toggleOpen: vi.fn(),
  isOpen: false,
}

describe('FilterButton', () => {
  it('renders button in closed state when no filters are active', () => {
    render(<FilterButton {...props} />)
    const filterButton = screen.getByRole('button', { name: ui.filterBy, expanded: false })
    expect(filterButton).toBeInTheDocument()
  })

  it('renders button in open state', () => {
    render(<FilterButton {...props} isOpen />)
    const filterButton = screen.getByRole('button', { name: ui.hideFilter, expanded: true })
    expect(filterButton).toBeInTheDocument()
  })

  it('renders button in closed state and lists active filters', () => {
    render(<FilterButton {...props} activeFilters={[1, 3, 5, 6, 7, 9, 10, 11, 12]} />)
    const filterButton = screen.getByRole('button', { name: /Filter by level 1, 3, 5 - 7, 9 - 12/i, expanded: false })
    expect(filterButton).toBeInTheDocument()
  })
})
