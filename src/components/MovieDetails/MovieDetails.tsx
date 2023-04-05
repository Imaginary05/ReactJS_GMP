// This component will render movie details when a movie is selected from the list (clicked).
// The details include movie poster image on the left and the rest of info on the right.
// The component should take properties to receive image url,
// movie name, release year, rating, duration and a description.
// Alternatively, you can specify a single property that accepts an object with all movie info.
import './MovieDetails.css'
import React from "react";
import { Movie } from '../MovieTile/MovieTile';
import { MdClear } from 'react-icons/md';

export type MovieDetailsProps = {
    movie: Movie;
    onDetailsClosed: () => void;
};

const MovieDetails: React.FC<MovieDetailsProps> = (
    {
        movie,
        onDetailsClosed
    }
) => {
    const handleClose = () => {
        onDetailsClosed();
    }

    return (
        <div className="movie-details">
            <div className="movie-details__poster">
                <img src={movie.posterUrl} alt={movie.title} />
            </div>
            <div className="movie-details__info">
                <div className="movie-details__row">
                    <div className="movie-details__title">{movie.title}</div>
                    <div className="movie-details__rating">{movie.rating}</div>
                    <div className='mdClear'>
                        <MdClear
                            data-testid='close-details'
                            onClick={handleClose}
                        ></MdClear>
                    </div>
                </div>
                <div className="movie-details__row movie-details__genres">
                    {
                        movie.genres.map((genre: string) =>
                            <span key={genre}>{genre}</span>
                        )
                    }
                </div>
                <div className="movie-details__row">
                    <div className="movie-details__year">{movie.releaseYear}</div>
                    <div className="movie-details__duration">
                        {
                            `${Math.floor(movie.duration/60)}h ${movie.duration%60}min`
                        }
                    </div>
                </div>
                <div className="movie-details__description">{movie.description}</div>
            </div>
        </div>
    );
};

export default MovieDetails;
