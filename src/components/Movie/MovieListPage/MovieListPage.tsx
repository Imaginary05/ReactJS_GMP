import React, { useState } from 'react';
import { movies } from '../../../data/movies';
import MovieTile, { Movie } from '../MovieTile/MovieTile';
import './MovieListPage.css';
import MovieDetails from '../MovieDetails/MovieDetails';
import Dialog from '../../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';
import DeleteMovieForm from '../../DeleteMovieForm/DeleteMovieForm';

const MovieListPage: React.FC = () => {
    const [showDetails, setShowDetails] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const [movieToShow, setMovieToShow] = useState<Movie>(({} as Movie));

    const handleDialogClose = () => {
        setShowDetails(false);
        setShowEdit(false);
        setShowDelete(false);
    }

    const handleTileClick = (movie: Movie) => {
        setMovieToShow(movie);
        setShowDetails(true);
    };

    const handleEditClick = (movie: Movie) => {
        setMovieToShow(movie);
        setShowEdit(true);
    };

    const handleDeleteClick = (movie: Movie) => {
        setMovieToShow(movie);
        setShowDelete(true);
    };

    return (
        <>
            <section className='movie-list'>
                {
                    movies.map((movie: Movie) =>
                        <MovieTile
                            movie={movie}
                            onTileClick={() => handleTileClick(movie)}
                            onEditClick={() => handleEditClick(movie)}
                            onDeleteClick={() => handleDeleteClick(movie)}
                            key={movie.title}
                        ></MovieTile>
                    )
                }
            </section>
            <>
                {
                    showDetails && (
                        <Dialog
                            title=''
                            onClose={handleDialogClose}
                            children={
                                <MovieDetails
                                    movie={movieToShow}
                                ></MovieDetails>
                            }
                        ></Dialog>
                    )
                }
            </>
            <>
                {
                    showEdit && (
                        <Dialog
                            title={`edit movie`.toUpperCase()}
                            onClose={handleDialogClose}
                            children={
                                <MovieForm
                                    movie={movieToShow}
                                    onSubmit={handleEditClick}
                                ></MovieForm>
                            }
                        ></Dialog>
                    )
                }
            </>
            <>
                {
                    showDelete && (
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
            </>
        </>
    )
};

export default MovieListPage;
