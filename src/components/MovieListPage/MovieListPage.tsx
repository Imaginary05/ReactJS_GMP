import React from 'react';
import { movies } from '../../data/movies';
import MovieTile, { Movie } from '../MovieTile/MovieTile';
import './MovieListPage.css';

const MovieListPage: React.FC = () => {

    return (
        <section className='movieList'>
            {
                movies.map((movie: Movie) =>
                    <MovieTile
                        movie={movie}
                        onTileClick={()=>{}}
                        onEditClick={()=>{}}
                        onDeleteClick={()=>{}}
                        key={movie.title}
                    ></MovieTile>
                )
            }
        </section>
    )
};

export default MovieListPage;
