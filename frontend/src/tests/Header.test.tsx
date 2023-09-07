import { render, screen } from '@testing-library/react'

import Header from '../components/Header'
import { ui } from '../utils/uiStrings'

const setQuerySpy = vi.fn()

describe('Header', () => {
  beforeEach(() => {
    render(<Header setQuery={setQuerySpy} />)
  })

  it('renders the header', () => {
    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
  })
  it('renders the main heading', () => {
    const heading = screen.getByText(ui.heading)
    expect(heading).toBeInTheDocument()
  })
})
