import React from 'react'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import MovieListPage from './MovieListPage'
import Fetch from '../../../services/fetch'
import { movies } from '../../../data/movies'
import { genres } from '../../../data/genres-list'

jest.mock('../../../services/fetch')

describe('MovieListPage', () => {
  beforeEach(() => {
    Fetch.mockResolvedValueOnce({ data: movies })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render the component', async () => {
    render(<MovieListPage />)

    await waitFor(() => expect(Fetch).toHaveBeenCalledTimes(1))
    expect(screen.getByTestId('MovieListPage')).toBeInTheDocument()
  })

  it('should display the add movie button', () => {
    render(<MovieListPage />)

    const addMovieButton = screen.getByText('+ ADD MOVIE')

    expect(addMovieButton).toBeInTheDocument()
  })

  it('opens the add movie dialog when the "add movie" button is clicked', () => {
    render(<MovieListPage />)

    const addMovieButton = screen.getByText('+ ADD MOVIE')

    fireEvent.click(addMovieButton)

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('heading')).toHaveTextContent('ADD MOVIE')
  })

  it('shows a movie tile for each movie in the list', async () => {
    render(<MovieListPage />)

    await waitFor(() => expect(Fetch).toHaveBeenCalledTimes(1))
    await waitFor(() => {
      movies.forEach(movie => {
        expect(screen.getByText(movie.title)).toBeInTheDocument()
      })
    })
  })

  it('should render the search form', async () => {
    render(<MovieListPage />)

    await waitFor(() => expect(Fetch).toHaveBeenCalledTimes(1))

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'SEARCH' })).toBeInTheDocument()
  })

  it('should render the filter panel', async () => {
    render(<MovieListPage />)

    await waitFor(() => expect(Fetch).toHaveBeenCalledTimes(1))

    expect(screen.getByText('Sort by')).toBeInTheDocument()
  })

  it('shows render the genre filter', async () => {
    render(<MovieListPage />)

    await waitFor(() => expect(Fetch).toHaveBeenCalledTimes(1))
    await waitFor(() => {
      genres.forEach(genre => {
        expect(screen.getByText(genre)).toBeInTheDocument()
      })
    })
  })

  it('should render movie details dialog on tile click', async () => {
    render(<MovieListPage />)

    await waitFor(() => expect(Fetch).toHaveBeenCalledTimes(1))

    await waitFor(() => {
      movies.forEach(movie => {
        fireEvent.click(screen.getByAltText(movie.title))

        expect(screen.getByRole('dialog')).toBeInTheDocument()
        expect(screen.getByTestId('movie-details')).toBeInTheDocument()
      })
    })
  })

  it('should display a "nothing found" message when the movie list is empty', () => {
    render(<MovieListPage />)

    const nothingFoundMessage = screen.getByText('Ooops... Nothing found')

    expect(nothingFoundMessage).toBeInTheDocument()
  })
})
