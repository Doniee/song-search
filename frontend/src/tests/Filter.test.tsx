import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Filter from '../components/Filter'
import { initialFilters } from '../utils/filters'
const props = {
  levelFilters: initialFilters,
  updateFilters: vi.fn(),
  activeFilters: [1, 3],
}

describe('Filter', () => {
  it('does not render filters when the container is closed and renders them after the button is clicked', async () => {
    render(<Filter {...props} />)
    const filterButton = screen.getByRole('button', { expanded: false })
    const filter = screen.queryByRole('button', { name: /Filter level/i })
    expect(filter).not.toBeInTheDocument()
    await userEvent.click(filterButton)
    const filterExpanded = screen.getByRole('button', { expanded: true })
    const filters = await screen.findAllByRole('button', { name: /Filter level/i })
    expect(filterExpanded).toBeInTheDocument()
    expect(filters).toHaveLength(15)
  })
})
