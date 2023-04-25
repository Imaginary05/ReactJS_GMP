import React, { useState } from 'react';
import './MovieForm.css';
import { genres } from '../../../data/genres-list';
import Button from '../../../common/Button/Button';
import Movie from '../movie';

export type MovieFormProps = {
    movie?: Movie;
    onSubmit: (movie: Movie) => void;
};

const MovieForm: React.FC<MovieFormProps> = ({
    movie= ({} as Movie),
    onSubmit,
}) => {
    const [initialMovie, setMovie] = useState(movie);
    const [editedMovie, setEditedMovie] = useState(movie);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
        setEditedMovie((prevMovie: Movie) => ({ ...prevMovie, genres: selectedGenres }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setMovie(editedMovie);

        onSubmit(editedMovie);
    };

    const handleReset = () => {
        setEditedMovie(initialMovie);
    };

    return (
        <form
            className="edit-movie-form"
            onSubmit={handleSubmit}>
            <div className="movie-form__row">
                <div className="movie-form__column">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={editedMovie?.title}
                        onChange={handleChange}
                        required />
                </div>
                <div className="movie-form__column">
                    <label htmlFor="releaseDate">Release Date</label>
                    <input
                        type="date"
                        id="releaseDate"
                        name="releaseDate"
                        value={editedMovie?.releaseDate}
                        onChange={handleChange}
                        required />
                </div>
            </div>
            <div className="movie-form__row">
                <div className="movie-form__column">
                    <label htmlFor="moviePath">Movie URL</label>
                    <input
                        type="url"
                        id="moviePath"
                        name="posterPath"
                        value={editedMovie?.posterPath}
                        onChange={handleChange}
                        required />
                </div>
                <div className="movie-form__column">
                    <label htmlFor="voteAverage">voteAverage</label>
                    <input
                        type="number"
                        id="voteAverage"
                        name="voteAverage"
                        value={editedMovie?.voteAverage}
                        onChange={handleChange}
                        min={0}
                        max={10}
                        step={0.1}
                        required />
                </div>
            </div>
            <div className="movie-form__row">
                <div className="movie-form__column">
                    <label htmlFor="genres">Genres</label>
                    <select
                        id="genres"
                        name="genres"
                        className="movie-form__select"
                        defaultValue={editedMovie.genres ? editedMovie.genres[0] : genres[0]}
                        onChange={handleSelectChange}
                        required
                    >
                        {
                            genres.map((genre: string) =>
                                <option
                                    value={genre}
                                    key={genre}
                                >{genre}</option>
                            )
                        }
                    </select>
                </div>
                <div className="movie-form__column">
                    <label htmlFor="duration">Runtime</label>
                    <input
                        type="number"
                        id="duration"
                        name="duration"
                        value={editedMovie?.runtime}
                        onChange={handleChange}
                        min={0}
                        max={500}
                        step={1}
                        required />
                </div>
            </div>
            <div className="movie-form__column">
                <label htmlFor="overview">Overview</label>
                <textarea
                    id="overview"
                    name="overview"
                    value={editedMovie?.overview}
                    onChange={handleChange}
                    required />
            </div>
            <div className="movie-form__buttons">
                <Button
                    onClick={handleReset}
                    title='Reset'
                    type='reset'
                ></Button>
                <Button
                    onClick={handleSubmit}
                    title='Submit'
                    type='submit'
                ></Button>
            </div>
        </form>
    );
};

export default MovieForm;
