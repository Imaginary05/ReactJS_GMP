'use client'
import React, {
  useEffect,
  useState
} from 'react'
import MovieTile from '../MovieTile/MovieTile'
import { Movie, type MovieData } from '../movie'
import SearchForm from '../../SearchForm/SearchForm'
import FilterPanel from '../../Filtering/FilterPanel/FilterPanel'
import Fetch from '../../../../services/fetch'
import { genres } from '../../../../data/genres-list'
import { options } from '../../../../data/sort-options'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const MovieListPage: React.FC = () => {
  const [movieList, setMovieList] = useState(([] as Movie[]))
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams.toString()
    const url = query ? `movies?${query}` : 'movies'
    void Fetch(url).then(
      (response: any) => {
        const data: Movie[] = response.data.map(
          (movie: MovieData) => new Movie(movie)
        )

        setMovieList(data)
      }
    )
  }, [searchParams.toString()])

  return (
        <div className="movie-list-page" data-testid='MovieListPage'>
            <header className='header'>
                <Link href={'/new'}>
                    <button
                        className='add-movie'
                        onClick={() => {}}
                    >+ ADD MOVIE</button>
                </Link>
                <SearchForm
                    initialQuery={''}
                    onSearch={() => {}}
                ></SearchForm>
            </header>

            <main className='main'>
                <FilterPanel
                    genres={genres}
                    sortOptions={options}
                    activeGenre={genres[0]}
                    sortCriterion={options[0]}
                    onGenreSelect={() => {}}
                    onSortByOptionSelect={() => {}}
                ></FilterPanel>
                <section className='movie-list'>
                    {
                        movieList.map((movie: Movie) =>
                               <MovieTile
                                   movie={movie}
                                   onTileClick={() => {}}
                                   onEditClick={() => {}}
                                   onDeleteClick={() => {}}
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
        </div>
  )
}

export default MovieListPage
