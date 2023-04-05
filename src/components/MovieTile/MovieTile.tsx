import React, { useState } from 'react';
import {
    MdClear,
    MdMoreVert
} from 'react-icons/md';
import './MovieTile.css';

export interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    releaseYear: string;
    genres: Array<string>;
    duration: number;
    rating: number;
    description: string;
}

export interface MovieTileProps {
    movie: Movie;
    onTileClick: (id: number) => void;
    onEditClick: (id: number) => void;
    onDeleteClick: (id: number) => void;
}

const MovieTile: React.FC<MovieTileProps> = ({
    movie,
    onTileClick,
    onEditClick,
    onDeleteClick,
}) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleTileClick = () => {
        onTileClick(movie.id);
    };

    const handleEditClick = () => {
        onEditClick(movie.id);
        setShowMenu(false);
    };

    const handleDeleteClick = () => {
        onDeleteClick(movie.id);
        setShowMenu(false);
    };

    return (
        <div className="movie-tile" onClick={handleTileClick}>
            <div className="movie-tile-image">
                <img src={movie.posterUrl} alt={movie.title} />
            </div>
            <div className="movie-tile-details">
                <div className='movie-tile-details-block'>
                    <div className="movie-tile-title">
                        {movie.title}
                    </div>
                    <div className="movie-tile-release-date">{movie.releaseYear}</div>
                </div>
                <div className='movie-tile-details-block'>
                    <div className="movie-tile-genres">
                        {movie.genres.map((genre) => (
                            <span key={genre}>{genre}</span>
                        ))}
                    </div>
                    <div
                        className="movie-tile-menu"
                        onClick={() => setShowMenu(!showMenu)}
                        data-testid='context-menu-button'
                    >
                        <MdMoreVert className='movie-tile-context-menu-button'></MdMoreVert>
                        {showMenu && (
                            <div
                                className="movie-tile-menu-popup"
                                data-testid='context-menu'
                            >
                                <div className="movie-tile-menu-popup-close">
                                    <MdClear
                                        className='mdClear'
                                        onClick={() => setShowMenu(!showMenu)}
                                    ></MdClear>
                                </div>
                                <button
                                    className='movie-tile-menu-popup-button'
                                    onClick={handleEditClick}
                                >Edit</button>
                                <button
                                    className='movie-tile-menu-popup-button'
                                    onClick={handleDeleteClick}
                                >Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieTile;
