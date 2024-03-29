import { genres } from './genres-list'
import type Movie from '../components/Movie/movie'

export const movies: Movie[] = [
  {
    id: 0,
    title: 'Movie1',
    posterPath: 'assets/poster1.png',
    releaseDate: '2008-06-09',
    genres: [genres[0]],
    runtime: 80,
    voteAverage: 8.5,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?'
  } as Movie,
  {
    id: 1,
    title: 'Movie2',
    posterPath: '../../../assets/poster2.png',
    releaseDate: '2020-05-20',
    genres: [genres[1]],
    runtime: 90,
    voteAverage: 7.5,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?'
  } as Movie,
  {
    id: 2,
    title: 'Movie3',
    posterPath: '../../../assets/poster3.png',
    releaseDate: '1999-12-22',
    genres: [genres[2]],
    runtime: 85,
    voteAverage: 6,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?'
  } as Movie,
  {
    id: 3,
    title: 'Movie4',
    posterPath: '../../../assets/poster4.png',
    releaseDate: '2021-11-11',
    genres: [genres[3]],
    runtime: 65,
    voteAverage: 9.7,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?'
  } as Movie,
  {
    id: 4,
    title: 'Movie5',
    posterPath: '../../../assets/poster5.png',
    releaseDate: '2020-12-12',
    genres: [genres[4]],
    runtime: 99,
    voteAverage: 8.3,
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at, culpa est et eveniet expedita harum hic iusto libero non odio possimus quam qui quia recusandae sit unde veniam vero?'
  } as Movie
]
