import { Movie } from '../components/MovieTile/MovieTile';
import { genres } from './genres-list';

export const movies: Movie[] = [
    {
        id: 0,
        title: 'Movie1',
        posterPath: 'assets/poster1.png',
        releaseYear: '2020',
        genres: [genres[0]],
    },
    {
        id: 1,
        title: 'Movie2',
        posterPath: '../../../assets/poster2.png',
        releaseYear: '2020',
        genres: [genres[1]],
    },
    {
        id: 2,
        title: 'Movie3',
        posterPath: '../../../assets/poster3.png',
        releaseYear: '2020',
        genres: [genres[2]],
    },
    {
        id: 3,
        title: 'Movie4',
        posterPath: '../../../assets/poster4.png',
        releaseYear: '2020',
        genres: [genres[3]],
    },
    {
        id: 4,
        title: 'Movie5',
        posterPath: '../../../assets/poster5.png',
        releaseYear: '2020',
        genres: [genres[4]],
    },
];
