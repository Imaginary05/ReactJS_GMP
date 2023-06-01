// `pages` directory
'use client'
import React, {
  useEffect,
  useRef,
  useState
} from 'react'
import {
  MdClear,
  MdMoreVert
} from 'react-icons/md'
import {
  Movie,
  MovieData
} from '../../components/Movie/movie'
import { genres } from '../../../data/genres-list'
import { options } from '../../../data/sort-options'
import Fetch from '../../../services/fetch'
import { usePathname } from 'next/navigation'
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';
import Link from 'next/link';

export interface MovieTileProps {
  movie: Movie
  onTileClick: (id: number) => void
  onEditClick: (id: number) => void
  onDeleteClick: (id: number) => void
}

const MovieTile: ({
}: { movie: any, onTileClick: any, onEditClick: any, onDeleteClick: any }) => Promise<JSX.Element> = async ({

}) => {
  const dialogContainer = useRef<HTMLDivElement | null>(null)
  const pathname = usePathname()
  const movieId = pathname.split('/')[2]

  const selectedMovie = await Fetch(`movies/${movieId}`).then(
    (response: any) => new Movie(response)
  )

  return (
      <FocusTrap focusTrapOptions={{
        fallbackFocus: '#close'
      }}>
        <div className='dialog-container' role='dialog'>
          <div className="dialog-wrapper" ref={dialogContainer}>
            <div className='dialog-content'>
              <div className="dialog-body">
                <div className="movie-details" data-testid='movie-details'>
                  <div className="movie-details__poster">
                    <img src={selectedMovie.posterPath} alt={selectedMovie.title} />
                  </div>
                  <div className="movie-details__info">
                    <div className="movie-details__row">
                      <div className="movie-details__title">{selectedMovie.title}</div>
                      <div className="movie-details__voteAverage">{selectedMovie.voteAverage}</div>
                    </div>
                    <div className="movie-details__row movie-details__genres">
                      {
                        selectedMovie.genres.map((genre: string) =>
                            <span key={genre}>{genre}</span>
                        )
                      }
                    </div>
                    <div className="movie-details__row">
                      <div className="movie-details__year">{selectedMovie.releaseDate}</div>
                      <div className="movie-details__duration">
                        {
                          selectedMovie.duration
                        }
                      </div>
                    </div>
                    <div className="movie-details__overview">{selectedMovie.overview}</div>
                  </div>
                </div>
              </div>
            </div>
            <button id="close" className='dialog-popup-close'>
              <Link href={'/movies'}>
                <MdClear
                  data-testid='close-details'
                ></MdClear>
              </Link>
            </button>
          </div>
        </div>
      </FocusTrap>
  )
}

export default MovieTile
