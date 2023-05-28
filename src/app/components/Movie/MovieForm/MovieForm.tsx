import React, { useState } from 'react'
import Button from '../../../common/Button/Button'
import { useForm } from 'react-hook-form'
import Fetch from '../../../../services/fetch'
import { type Movie } from '../../../../components/Movie/movie'
import { genres } from '../../../../data/genres-list';

export interface MovieFormProps {
  movie?: Movie
  onFormSubmit: () => void
}

const MovieForm: React.FC<MovieFormProps> = ({
  movie,
  onFormSubmit
}) => {
  const defaultMovie = {} as Movie
  const [initialMovie, setMovie] = useState((movie != null) ? movie : defaultMovie)
  const [editedMovie, setEditedMovie] = useState((movie != null) ? movie : defaultMovie)
  const [isEditMovie] = useState(!(movie == null))

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: {
      // genres: editedMovie.genres ? editedMovie.genres[0] : genres[0],
    },
    values: {
      title: editedMovie.title,
      releaseDate: editedMovie.releaseDate,
      posterPath: editedMovie.posterPath,
      voteAverage: editedMovie.voteAverage,
      genres: editedMovie.genres ? editedMovie.genres[0] : '',
      duration: editedMovie.runtime,
      overview: editedMovie.overview
    }
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (!isEditMovie && name === 'duration') {
      setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, runtime: Number(value) }))
    } else {
      setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, [name]: value }))
    }
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value)
    setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, genres: selectedGenres }))
  }

  const handleOnSubmit = () => {
    setMovie(editedMovie)

    let movieData = {
      title: editedMovie.title,
      genres: editedMovie.genres,
      runtime: editedMovie.runtime,
      overview: editedMovie.overview,
      poster_path: editedMovie.posterPath
    } as Partial<Movie>

    if (isEditMovie) {
      movieData = {
        ...movieData,
        id: editedMovie.id
      }
    }

    Fetch('movies', {
      method: isEditMovie ? 'PUT' : 'POST',
      body: JSON.stringify(movieData)
    })

    onFormSubmit()
  }

  const handleReset = () => {
    setEditedMovie(initialMovie)
  }

  return (
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
  )
}

export default MovieForm
