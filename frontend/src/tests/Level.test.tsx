import { render, screen } from '@testing-library/react'

import Level from '../components/Level'

describe('Level', () => {
  it('renders level svg and level number', () => {
    render(<Level level={2} id="123" />)
    const levelSvg = screen.getByRole('img', { name: /level/i })
    const levelNumber = screen.getByText('2')
    expect(levelSvg).toBeInTheDocument()
    expect(levelNumber).toBeInTheDocument()
  })
})
