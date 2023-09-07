import { render, screen } from '@testing-library/react'

import Search from '../components/Search'

const setQuerySpy = vi.fn()

describe('Search', () => {
  it('renders search form', () => {
    render(<Search setQuery={setQuerySpy} />)
    const search = screen.getByRole('search')
    expect(search).toBeInTheDocument()
  })
})
