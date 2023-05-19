// This component will render movie details when a movie is selected from the list (clicked).
// The details include movie poster image on the left and the rest of info on the right.
// The component should take properties to receive image url,
// movie name, release year, voteAverage, duration and a overview.
// Alternatively, you can specify a single property that accepts an object with all movie info.
import './MovieDetails.css'
import React from 'react'
import type Movie from '../movie'

export interface MovieDetailsProps {
  movie: Movie
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
  movie
}) => {
  return (
        <div className="movie-details" data-testid='movie-details'>
            <div className="movie-details__poster">
                <img src={movie.posterPath} alt={movie.title} />
            </div>
            <div className="movie-details__info">
                <div className="movie-details__row">
                    <div className="movie-details__title">{movie.title}</div>
                    <div className="movie-details__voteAverage">{movie.voteAverage}</div>
                </div>
                <div className="movie-details__row movie-details__genres">
                    {
                        movie.genres.map((genre: string) =>
                            <span key={genre}>{genre}</span>
                        )
                    }
                </div>
                <div className="movie-details__row">
                    <div className="movie-details__year">{movie.releaseDate}</div>
                    <div className="movie-details__duration">
                        {
                            movie.duration
                        }
                    </div>
                </div>
                <div className="movie-details__overview">{movie.overview}</div>
            </div>
        </div>
  )
}

export default MovieDetails
