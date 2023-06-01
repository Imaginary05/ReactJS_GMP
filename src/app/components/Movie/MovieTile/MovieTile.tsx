import React, { useState } from 'react'
import {
  MdClear,
  MdMoreVert
} from 'react-icons/md'
import { type Movie } from '../../../../components/Movie/movie'
import Link from 'next/link'

export interface MovieTileProps {
  movie: Movie
  onTileClick?: (id: number) => void
  onEditClick?: (id: number) => void
  onDeleteClick?: (id: number) => void
}

const MovieTile: React.FC<MovieTileProps> = ({
  movie
}) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
        <div className="movie-tile">
            <Link href={`movies/${movie.id}`} key={movie.id}>

            <div onClick={() => {}}>
                <img className="movie-tile-image" src={movie.posterPath} alt={movie.title} />
            </div>
            </Link>
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
                                <Link href={`edit/${movie.id}`}>
                                <button
                                    className='movie-tile-menu-popup-button'
                                    onClick={() => {}}
                                >Edit</button>
                                </Link>
                                <Link href={`delete/${movie.id}`}>
                                <button
                                    className='movie-tile-menu-popup-button'
                                    onClick={() => {}}
                                >Delete</button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MovieTile
