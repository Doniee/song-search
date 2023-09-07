import { render, screen } from '@testing-library/react'

import FilterList from '../components/FilterList'
import { initialFilters } from '../utils/filters'

const props = {
  levelFilters: initialFilters,
  updateFilters: vi.fn(),
  isOpen: true,
}

describe('Filterlist', () => {
  it('renders 15 filter buttons', async () => {
    render(<FilterList {...props} />)
    const filterButtons = await screen.findAllByRole('button', { name: /Filter level/i })
    expect(filterButtons).toHaveLength(15)
  })

  it('renders 2 active filter buttons', async () => {
    const levelFilters = [
      { level: 1, active: true },
      { level: 2, active: true },
      { level: 3, active: false },
    ]
    render(<FilterList {...props} levelFilters={levelFilters} />)
    const filterButtons = await screen.findAllByRole('button', { pressed: true })
    expect(filterButtons).toHaveLength(2)
  })

  it('does not render filters if not open', () => {
    render(<FilterList {...props} isOpen={false} />)
    const filterButtons = screen.queryByRole('button')
    expect(filterButtons).not.toBeInTheDocument()
  })
})
