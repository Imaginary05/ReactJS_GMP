'use client'

import React, {
  useRef,
  useState
} from 'react'
import {
  useForm,
  useFormState
} from 'react-hook-form'
import Link from 'next/link'
import { MdClear } from 'react-icons/md'
import FocusTrap from 'focus-trap-react'
import Fetch from '../../../services/fetch'
import { genres } from '../../../data/genres-list'
import Button from '../../common/Button/Button'
import { Movie } from '../../components/Movie/movie'
import {
  redirect,
  usePathname
} from 'next/navigation'

const MovieForm: () => JSX.Element = () => {
  let defaultMovie = {} as Movie
  const [initialMovie, setMovie] = useState(defaultMovie)
  const [editedMovie, setEditedMovie] = useState(defaultMovie)

  const pathname = usePathname()
  const movieId = pathname.split('/')[2]

  const { register, formState: { errors }, handleSubmit, reset } = useForm()

  void Fetch(`movies/${movieId}`).then(
    (response: any) => {
      defaultMovie = new Movie(response)
      reset({
        title: defaultMovie.title,
        releaseDate: defaultMovie.releaseDate,
        posterPath: defaultMovie.posterPath,
        voteAverage: defaultMovie.voteAverage,
        genres: defaultMovie.genres[0],
        duration: defaultMovie.runtime,
        overview: defaultMovie.overview
      })
    }
  )

  const dialogContainer = useRef<HTMLDivElement | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target

    setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, [name]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value)
    setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, genres: selectedGenres }))
  }

  const handleOnSubmit = (): void => {
    setMovie(editedMovie)

    const movieData = {
      id: editedMovie.id,
      title: editedMovie.title,
      genres: editedMovie.genres,
      runtime: editedMovie.runtime,
      overview: editedMovie.overview,
      poster_path: editedMovie.posterPath
    } as Partial<Movie>

    void Fetch('movies', {
      method: 'PUT',
      body: JSON.stringify(movieData)
    })

    redirect('movies')
  }

  const handleReset = (): void => {
    setEditedMovie(initialMovie)
  }

  return (
      <FocusTrap focusTrapOptions={{
        fallbackFocus: '#close'
      }}>
        <div className='dialog-container' role='dialog'>
          <div className="dialog-wrapper" ref={dialogContainer}>
            <div className='dialog-content'>
              <div className="dialog-body">
                <form
                    className="edit-movie-form"
                    // onSubmit={handleOnSubmit}>
                    onSubmit={handleSubmit(handleOnSubmit)}>
                  <div className="movie-form__row">
                    <div className="movie-form__column">
                      <label htmlFor="title">Title</label>
                      <input
                          type="text"
                          id="title"
                          {...register(
                            'title',
                            {
                              required: true,
                              onChange: handleChange
                            }
                          )} />
                      {
                          errors.title?.type === 'required' &&
                          <p role="alert">Title is required</p>
                      }
                    </div>
                    <div className="movie-form__column">
                      <label htmlFor="releaseDate">Release Date</label>
                      <input
                          type="date"
                          id="releaseDate"
                          {...register(
                            'releaseDate',
                            {
                              onChange: handleChange
                            }
                          )}
                      />
                    </div>
                  </div>
                  <div className="movie-form__row">
                    <div className="movie-form__column">
                      <label htmlFor="moviePath">Poster path</label>
                      <input
                          type="url"
                          id="moviePath"
                          {...register(
                            'posterPath',
                            {
                              required: true,
                              onChange: handleChange
                            }
                          )} />
                      {
                          errors.posterPath?.type === 'required' &&
                          <p role="alert">Poster path is required</p>
                      }
                    </div>
                    <div className="movie-form__column">
                      <label htmlFor="voteAverage">voteAverage</label>
                      <input
                          type="number"
                          id="voteAverage"
                          min={0}
                          max={10}
                          step={0.1}
                          {...register(
                            'voteAverage',
                            {
                              min: 0,
                              max: 10,
                              onChange: handleChange
                            }
                          )} />
                      {
                          errors.voteAverage?.type === 'min' &&
                          <p role="alert">Min vote is 0</p>
                      }
                      {
                          errors.voteAverage?.type === 'max' &&
                          <p role="alert">Max vote is 10</p>
                      }
                    </div>
                  </div>
                  <div className="movie-form__row">
                    <div className="movie-form__column">
                      <label htmlFor="genres">Genres</label>
                      <select
                          id="genres"
                          className="movie-form__select"
                          {...register(
                            'genres',
                            {
                              required: true,
                              onChange: handleSelectChange
                            }
                          )}
                      >
                        {
                          genres.map((genre: string) =>
                              <option
                                  value={genre}
                                  key={genre}
                              >{genre}</option>
                          )
                        }
                      </select>
                      {
                          errors.genres?.type === 'required' &&
                          <p role="alert">Genre is required</p>
                      }
                    </div>
                    <div className="movie-form__column">
                      <label htmlFor="duration">Runtime</label>
                      <input
                          type="number"
                          id="duration"
                          min={0}
                          max={300}
                          step={1}
                          {...register(
                            'duration',
                            {
                              min: 0,
                              max: 300,
                              required: true,
                              onChange: handleChange
                            }
                          )} />
                      {
                          errors.duration?.type === 'required' &&
                          <p role="alert">Runtime is required</p>
                      }
                    </div>
                  </div>
                  <div className="movie-form__column">
                    <label htmlFor="overview">Overview</label>
                    <textarea
                        id="overview"
                        {...register(
                          'overview',
                          {
                            required: true,
                            onChange: handleChange
                          }
                        )} />
                    {
                        errors.overview?.type === 'required' &&
                        <p role="alert">Overview is required</p>
                    }
                  </div>
                  <div className="movie-form__buttons">
                    <Button
                        onClick={handleReset}
                        title='Reset'
                        type='reset'
                    ></Button>
                    <Button
                        onClick={handleSubmit}
                        title='Submit'
                        type='submit'
                    ></Button>
                  </div>
                </form>
              </div>
            </div>
            <button id="close" className='dialog-popup-close'>
              <Link href={'/movies'}>
                <MdClear
                    data-testid='close-details'
                ></MdClear>
              </Link>
            </button>
          </div>
        </div>
      </FocusTrap>
  )
}

export default MovieForm
