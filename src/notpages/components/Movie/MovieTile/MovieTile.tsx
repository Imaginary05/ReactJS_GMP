import React, { useState } from 'react'
import {
  MdClear,
  MdMoreVert
} from 'react-icons/md'
import { type Movie } from '../../../../components/Movie/movie'

export interface MovieTileProps {
  movie: Movie
  onTileClick: (id: number) => void
  onEditClick: (id: number) => void
  onDeleteClick: (id: number) => void
}

const MovieTile: React.FC<MovieTileProps> = ({
  movie,
  onTileClick,
  onEditClick,
  onDeleteClick
}) => {
  const [showMenu, setShowMenu] = useState(false)

  const handleTileClick = (): void => {
    onTileClick(movie.id)
  }

  const handleEditClick = (): void => {
    onEditClick(movie.id)
    setShowMenu(false)
  }

  const handleDeleteClick = (): void => {
    onDeleteClick(movie.id)
    setShowMenu(false)
  }

  return (
        <div className="movie-tile">
            <div onClick={handleTileClick}>
                <img className="movie-tile-image" src={movie.posterPath} alt={movie.title} />
            </div>
            <div className="movie-tile-details">
                <div className='movie-tile-details-block'>
                    <div className="movie-tile-title">
                        {movie.title}
                    </div>
                    <div className="movie-tile-release-date">
                        {movie.releaseDate?.slice(0, 4)}
                    </div>
                </div>
                <div className='movie-tile-details-block'>
                    <div className="movie-tile-genres">
                        {movie.genres.join(', ')}
                    </div>
                    <div
                        className="movie-tile-menu"
                        onClick={() => { setShowMenu(!showMenu) }}
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
                                        className='menu-popup-close'
                                        onClick={() => { setShowMenu(!showMenu) }}
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
  )
}

export default MovieTile
