import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom';
import { Logo } from './logo'

describe('Logo', () => {
  it('renders the logo image and alt text', () => {
    const { getByAltText } = render(<Logo />)
    const logo = getByAltText('Logo')
    expect(logo).toHaveAttribute('src', expect.any(String))
    expect(logo).toHaveAttribute('alt', 'Logo')
  })

  it('renders the correct heading text', () => {
    const { getByText } = render(<Logo />)
    const heading = getByText('Hotel Finder')
    expect(heading).toBeInTheDocument()
  })
})