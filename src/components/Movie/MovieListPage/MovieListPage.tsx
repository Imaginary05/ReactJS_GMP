import React, {
    useEffect,
    useState
} from 'react';
import MovieTile from '../MovieTile/MovieTile';
import './MovieListPage.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import Dialog from '../../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import DeleteMovieForm from '../../DeleteMovieForm/DeleteMovieForm';
import Fetch from '../../../services/fetch';
import Movie, { MovieData } from '../movie';
import SearchForm from '../../SearchForm/SearchForm';
import FilterPanel from '../../Filtering/FilterPanel/FilterPanel';
import { genres } from '../../../data/genres-list';
import { options } from '../../../data/sort-options';

const MovieListPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCriterion, setSortCriterion] = useState(options[0]);
    const [activeGenre, setActiveGenre] = useState(genres[0]);

    const [movieList, setMovieList] = useState(([] as Movie[]));
    const [selectedMovie, setSelectedMovie] = useState(({} as Movie));

    const [showDetailsMovieDialog, setShowDetailsMovieDialog] = useState(false);
    const [showEditMovieDialog, setShowEditMovieDialog] = useState(false);

    const [showDeleteMovieDialog, setShowDeleteMovieDialog] = useState(false);
    const [showAddMovieDialog, setShowAddMovieDialog] = useState(false);

    useEffect(() => {
        let url = 'movies?';

        if (activeGenre && activeGenre !== genres[0]) {
            url = `${url}&search=${activeGenre}&searchBy=genres`;
        }

        if (sortCriterion && sortCriterion !== options[0]) {
            const criterion = sortCriterion
                .toLowerCase()
                .replace(' ', '_');

            url = `${url}&sortBy=${criterion}&sortOrder=asc`;
        }

        if (searchQuery) {
            url = `${url}&search=${searchQuery}&searchBy=title`;
        }

        url = url.includes('?&')
            ? url.replace('?&', '?')
            : 'movies';

        Fetch(url).then(
            (response: any) => {
                const data: Movie[] = response.data.map(
                    (movie: MovieData) => new Movie(
                        movie.id,
                        movie.title,
                        movie.vote_average,
                        movie.release_date,
                        movie.poster_path,
                        movie.overview,
                        movie.genres,
                        movie.runtime,
                        movie.tagline,
                        movie.vote_count,
                        movie.budget,
                        movie.revenue,
                    )
                );
                setMovieList(data);
            }
        );
    }, [activeGenre, sortCriterion, searchQuery]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleAddMovie = () => {
        setShowAddMovieDialog(true);
    }

    const handleDialogClose = () => {
        setShowDetailsMovieDialog(false);
        setShowEditMovieDialog(false);
        setShowDeleteMovieDialog(false);
        setShowAddMovieDialog(false);
    }

    const handleTileClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setShowDetailsMovieDialog(true);
    };

    const handleEditClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setShowEditMovieDialog(true);
    };

    const handleDeleteClick = (movie: Movie) => {
        setSelectedMovie(movie);
        setShowDeleteMovieDialog(true);
    };

    const handleGenreSelect = (genre: string) => {
        setActiveGenre(genre);
    }

    const handleSortCriterionSelect = (criterion: string) => {
        setSortCriterion(criterion);
    }

    return (
        <div className="movie-list-page" data-testid='MovieListPage'>
            <header className='header'>
                <button
                    className='add-movie'
                    onClick={handleAddMovie}
                >+ ADD MOVIE</button>
                <SearchForm
                    initialQuery={searchQuery}
                    onSearch={handleSearch}
                ></SearchForm>
            </header>

            <main className='main'>
                <FilterPanel
                    genres={genres}
                    sortOptions={options}
                    activeGenre={activeGenre}
                    sortCriterion={sortCriterion}
                    onGenreSelect={handleGenreSelect}
                    onSortByOptionSelect={handleSortCriterionSelect}
                ></FilterPanel>
                <section className='movie-list'>
                    {
                        movieList.map((movie: Movie) =>
                            <MovieTile
                                movie={movie}
                                onTileClick={() => handleTileClick(movie)}
                                onEditClick={() => handleEditClick(movie)}
                                onDeleteClick={() => handleDeleteClick(movie)}
                                key={movie.title}
                            ></MovieTile>
                        )
                    }
                    {
                        movieList.length === 0 && (
                            <div className='nothing-found'>
                                Ooops... Nothing found
                            </div>
                        )
                    }
                </section>
            </main>

            <footer className='footer'>

            </footer>

            {
                showAddMovieDialog && (
                    <Dialog
                        title={`add movie`.toUpperCase()}
                        children={
                            <MovieForm
                                onSubmit={()=>{}}
                            ></MovieForm>
                        }
                        onClose={handleDialogClose}
                    ></Dialog>
                )
            }
            {
                showDetailsMovieDialog && (
                    <Dialog
                        title=''
                        onClose={handleDialogClose}
                        children={
                            <MovieDetails
                                movie={selectedMovie}
                            ></MovieDetails>
                        }
                    ></Dialog>
                )
            }
            {
                showEditMovieDialog && (
                    <Dialog
                        title={`edit movie`.toUpperCase()}
                        onClose={handleDialogClose}
                        children={
                            <MovieForm
                                movie={selectedMovie}
                                onSubmit={handleEditClick}
                            ></MovieForm>
                        }
                    ></Dialog>
                )
            }
            {
                showDeleteMovieDialog && (
                    <Dialog
                        title={`delete movie`.toUpperCase()}
                        onClose={handleDialogClose}
                        children={
                            <DeleteMovieForm
                                onConfirmClick={()=>{}}
                            ></DeleteMovieForm>
                        }
                    ></Dialog>
                )
            }
        </div>
    )
};

export default MovieListPage;
