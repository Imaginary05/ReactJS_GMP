import React, { useState } from 'react';
import { movies } from '../../../data/movies';
import MovieTile, { Movie } from '../MovieTile/MovieTile';
import './MovieListPage.css';
import MovieDetails from '../MovieDetails/MovieDetails';

const MovieListPage: React.FC = () => {
    const [showDetails, setShowDetails] = useState(false);

    const [movieToShow, setMovieToShow] = useState<Movie>(({} as Movie));

    const handleDetailsClose = () => {
        setShowDetails(false);
    }

    const handleTileClick = (movie: Movie) => {
        setMovieToShow(movie);
        setShowDetails(true);
    };

    return (
        <>
            {
                showDetails && (
                    <div className='movie-details-container'>
                        <MovieDetails
                            movie={movieToShow}
                            onDetailsClosed={handleDetailsClose}
                        ></MovieDetails>
                    </div>
                )
            }
            <section className='movie-list'>
                {
                    movies.map((movie: Movie) =>
                        <MovieTile
                            movie={movie}
                            onTileClick={() => handleTileClick(movie)}
                            onEditClick={()=>{}}
                            onDeleteClick={()=>{}}
                            key={movie.title}
                        ></MovieTile>
                    )
                }
            </section>
        </>
    )
};

export default MovieListPage;
