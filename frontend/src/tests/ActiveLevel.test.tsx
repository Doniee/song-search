import { render, screen } from '@testing-library/react'

import ActiveLevel from '../components/ActiveLevel'

describe('ActiveLevel', () => {
  it('renders active level', () => {
    render(<ActiveLevel level={2} />)
    const level = screen.getByText(/2/i)
    expect(level).toBeInTheDocument()
  })
})
