import { useLoaderData } from 'react-router-dom'
import type Movie from '../../components/Movie/movie'
import React from 'react'
import MovieDetails from '../../components/Movie/MovieDetails/MovieDetails'

const MovieLoader = (): JSX.Element => {
  const movie = useLoaderData() as Movie

  return (
        <MovieDetails movie={movie}></MovieDetails>
  )
}

export default MovieLoader
