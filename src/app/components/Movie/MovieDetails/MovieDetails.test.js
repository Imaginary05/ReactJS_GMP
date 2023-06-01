import React from 'react'
import { render, screen } from '@testing-library/react'
import MovieDetails from './MovieDetails'

describe('MovieDetails', () => {
  const movie = {
    id: 0,
    title: 'Movie Title',
    posterPath: 'assets/poster1.png',
    releaseDate: 2022,
    genres: [],
    voteAverage: 8.5,
    duration: 120,
    overview: 'Movie overview goes here.'
  }
  const onClick = jest.fn()

  afterEach(() => {
    onClick.mockClear()
  })

  it('should render movie poster image', () => {
    render(<MovieDetails movie={movie} onDetailsClosed={() => {}}/>)

    const posterImage = screen.getByAltText(movie.title)

    expect(posterImage).toBeInTheDocument()
    expect(posterImage.getAttribute('src')).toBe(movie.posterPath)
  })

  it('should render movie title', () => {
    render(<MovieDetails movie={movie} onDetailsClosed={() => {}}/>)

    const movieTitle = screen.getByText(movie.title)

    expect(movieTitle).toBeInTheDocument()
  })

  it('should render movie year', () => {
    render(<MovieDetails movie={movie} onDetailsClosed={() => {}}/>)

    const movieYear = screen.getByText(`${movie.releaseDate}`)

    expect(movieYear).toBeInTheDocument()
  })

  it('should render movie voteAverage', () => {
    render(<MovieDetails movie={movie} onDetailsClosed={() => {}}/>)

    const movievoteAverage = screen.getByText(`${movie.voteAverage}`)

    expect(movievoteAverage).toBeInTheDocument()
  })

  it('should render movie duration', () => {
    render(<MovieDetails movie={movie} onDetailsClosed={() => {}}/>)

    const movieDuration = screen.getByText(movie.duration)

    expect(movieDuration).toBeInTheDocument()
  })

  it('should render movie overview', () => {
    render(<MovieDetails movie={movie} onDetailsClosed={() => {}}/>)

    const movieoverview = screen.getByText(movie.overview)

    expect(movieoverview).toBeInTheDocument()
  })
})
