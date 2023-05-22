import { useLoaderData } from 'react-router-dom';
import Movie from '../../components/Movie/movie';
import React from 'react';
import MovieDetails from '../../components/Movie/MovieDetails/MovieDetails';

const MovieLoader = () => {
    const movie = useLoaderData() as Movie;

    return (
        <MovieDetails movie={movie}></MovieDetails>
    )
};

export default MovieLoader;
