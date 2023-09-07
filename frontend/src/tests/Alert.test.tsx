import { render, screen } from '@testing-library/react'

import Alert from '../components/Alert'
import { ui } from '../utils/uiStrings'

describe('Alert', () => {
  it('renders alert component', () => {
    render(<Alert message="Alert message" />)
    const alert = screen.getByRole('alert')
    expect(alert).toBeInTheDocument()
  })

  it('renders message', () => {
    render(<Alert message={ui.errorLoadingSongs} />)
    const errorMessage = screen.getByText(ui.errorLoadingSongs)
    expect(errorMessage).toBeInTheDocument()
  })

  it('renders loading indicator', () => {
    render(<Alert message={ui.errorLoadingSongs} retrying />)
    const loadingIndicator = screen.getByText(ui.loading)
    expect(loadingIndicator).toBeInTheDocument()
  })

  it('does not render loading indicator', () => {
    render(<Alert message={ui.errorLoadingSongs} />)
    const loadingIndicator = screen.queryByText(ui.loading)
    expect(loadingIndicator).not.toBeInTheDocument()
  })
})
