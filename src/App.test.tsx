import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders movie list component', () => {
  render(<App />)

  const movieListPage = screen.getByTestId('MovieListPage')

  expect(movieListPage).toBeInTheDocument()
})
