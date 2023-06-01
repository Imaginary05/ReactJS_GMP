import React, {
  useEffect,
  useState
} from 'react'
import MovieTile from '../MovieTile/MovieTile'
import MovieForm from '../MovieForm/MovieForm'
import DeleteMovieForm from '../../DeleteMovieForm/DeleteMovieForm'
import { Movie, type MovieData } from '../movie'
import SearchForm from '../../SearchForm/SearchForm'
import FilterPanel from '../../Filtering/FilterPanel/FilterPanel'
import {
  Outlet,
  useNavigate
} from 'react-router-dom'
import queryString from 'query-string'
import MovieDetails from '../MovieDetails/MovieDetails'
import Fetch from '../../../../services/fetch'
import { genres } from '../../../../data/genres-list'
import { options } from '../../../../data/sort-options'
import {
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation'

const MovieListPage: React.FC = () => {
  const query = useSearchParams()

  const [searchQuery, setSearchQuery] = useState(query.get('search') || '')
  const [sortCriterion, setSortCriterion] = useState(query.get('sortBy') || options[0])
  const [activeGenre, setActiveGenre] = useState(query.get('genre') || genres[0])

  const [movieList, setMovieList] = useState(([] as Movie[]))
  const [selectedMovie, setSelectedMovie] = useState(({} as Movie))

  const [showDetailsMovieDialog, setShowDetailsMovieDialog] = useState(false)
  const [showEditMovieDialog, setShowEditMovieDialog] = useState(false)

  const [showDeleteMovieDialog, setShowDeleteMovieDialog] = useState(false)
  const [deletedMovieCount, setDeletedMovieCount] = useState(0)

  const [showAddMovieDialog, setShowAddMovieDialog] = useState(false)

  // const navigate = useNavigate()
  const location = useRouter()
  const pathname = usePathname()
  const queryParams = queryString.parse(location.search)

  useEffect(() => {
    let url = 'movies?'

    if ((activeGenre !== '') && activeGenre !== genres[0]) {
      url = `${url}&search=${activeGenre}&searchBy=genres`
    }

    if ((sortCriterion !== '') && sortCriterion !== options[0]) {
      const criterion = sortCriterion
        .toLowerCase()
        .replace(' ', '_')

      url = `${url}&sortBy=${criterion}&sortOrder=asc`
    }

    if (searchQuery !== '') {
      url = `${url}&search=${searchQuery}&searchBy=title`
    }

    url = url.includes('?&')
      ? url.replace('?&', '?')
      : 'movies'

    void Fetch(url).then(
      (response: any) => {
        const data: Movie[] = response.data.map(
          (movie: MovieData) => new Movie(movie)
        )

        setMovieList(data)

        const movieId = pathname.split('/')[2]

        if (movieId !== '') {
          void Fetch(`movies/${movieId}`).then(
            (response: any) => {
              const selectedMovie = new Movie(response)

              if (pathname.includes('movies')) {
                handleTileClick(selectedMovie)
              } else {
                handleEditClick(selectedMovie)
              }
            }
          )
        } if (pathname.includes('new')) {
          handleAddMovie()
        }
      }
    )
  }, [activeGenre, sortCriterion, searchQuery, deletedMovieCount])

  const onDelete = (): void => {
    const movieId = location.pathname.split('/')[2]

    void Fetch(`movies/${movieId}`, {
      method: 'DELETE'
    })

    handleDialogClose()
    setDeletedMovieCount(deletedMovieCount + 1)
  }

  const handleFormSubmit = (): void => {
    handleDialogClose()
  }

  const handleAddMovie = (): void => {
    setShowAddMovieDialog(true)
    navigate(`new/${location.search}`)
  }

  const handleDialogClose = (): void => {
    setShowDetailsMovieDialog(false)
    setShowEditMovieDialog(false)
    setShowDeleteMovieDialog(false)
    setShowAddMovieDialog(false)
    navigate(`/${location.search}`)
  }

  const handleTileClick = (movie: Movie): void => {
    setSelectedMovie(movie)
    setShowDetailsMovieDialog(true)
    navigate(`movies/${movie.id}${location.search}`)
  }

  const handleEditClick = (movie: Movie): void => {
    setSelectedMovie(movie)
    setShowEditMovieDialog(true)
    navigate(`edit/${movie.id}/${location.search}`)
  }

  const handleDeleteClick = (movie: Movie): void => {
    setShowDeleteMovieDialog(true)
    navigate(`delete/${movie.id}/${location.search}`)
  }

  const handleSearch = (search: string): void => {
    const newQueryParams = { ...queryParams, search }
    navigate(`?${queryString.stringify(newQueryParams)}`)
    setSearchQuery(search)
  }

  const handleGenreSelect = (genre: string): void => {
    const newQueryParams = { ...queryParams, genre }
    navigate(`?${queryString.stringify(newQueryParams)}`)
    setActiveGenre(genre)
  }

  const handleSortCriterionSelect = (sortBy: string): void => {
    const newQueryParams = { ...queryParams, sortBy }
    navigate(`?${queryString.stringify(newQueryParams)}`)
    setSortCriterion(sortBy)
  }

  return (
        <div className="movie-list-page" data-testid='MovieListPage'>
            <header className='header'>
                <button
                    className='add-movie'
                    onClick={handleAddMovie}
                >+ ADD MOVIE</button>
                <SearchForm
                    initialQuery={searchQuery}
                    onSearch={handleSearch}
                ></SearchForm>
            </header>

            <main className='main'>
                <FilterPanel
                    genres={genres}
                    sortOptions={options}
                    activeGenre={activeGenre}
                    sortCriterion={sortCriterion}
                    onGenreSelect={handleGenreSelect}
                    onSortByOptionSelect={handleSortCriterionSelect}
                ></FilterPanel>
                <section className='movie-list'>
                    {
                        movieList.map((movie: Movie) =>
                           <MovieTile
                               movie={movie}
                               onTileClick={() => { handleTileClick(movie) }}
                               onEditClick={() => { handleEditClick(movie) }}
                               onDeleteClick={() => { handleDeleteClick(movie) }}
                               key={movie.title}
                           ></MovieTile>
                        )
                    }
                    {
                        movieList.length === 0 && (
                            <div className='nothing-found'>
                                Ooops... Nothing found
                            </div>
                        )
                    }
                </section>
            </main>

            <footer className='footer'>

            </footer>

            {
                showAddMovieDialog && (
                    <Outlet context={
                        {
                          title: 'add movie'.toUpperCase(),
                          children: <MovieForm onFormSubmit={handleFormSubmit}></MovieForm>,
                          onClose: handleDialogClose
                        }
                    }/>
                )
            }
            {
                showDetailsMovieDialog && (
                    <Outlet context={
                        {
                          title: '',
                          children: <MovieDetails movie={selectedMovie}></MovieDetails>,
                          onClose: handleDialogClose
                        }
                    }/>
                )
            }
            {
                showEditMovieDialog && (
                    <Outlet context={
                        {
                          title: 'edit movie'.toUpperCase(),
                          children: <MovieForm movie={selectedMovie} onFormSubmit={handleFormSubmit}></MovieForm>,
                          onClose: handleDialogClose
                        }
                    }/>
                )
            }
            {
                showDeleteMovieDialog && (
                    <Outlet context={
                        {
                          title: 'delete movie'.toUpperCase(),
                          children: <DeleteMovieForm onConfirmClick={onDelete}></DeleteMovieForm>,
                          onClose: handleDialogClose
                        }
                    }/>
                )
            }
        </div>
  )
}

export default MovieListPage
