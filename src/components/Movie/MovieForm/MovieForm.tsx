import React, { useState } from 'react';
import { Movie } from '../MovieTile/MovieTile';
import './MovieForm.css';
import { genres } from '../../../data/genres-list';
import Button from '../../../common/Button/Button';

export type MovieFormProps = {
    movie?: Movie;
    onSubmit: (movie: Movie) => void;
};

const MovieForm: React.FC<MovieFormProps> = ({
    movie = {
        id: 0,
        title: '',
        posterUrl: '',
        releaseYear: '',
        genres,
        duration: 0,
        rating: 0,
        description: '',
    },
    onSubmit,
}) => {
    const [initialMovie, setMovie] = useState(movie);
    const [editedMovie, setEditedMovie] = useState(movie);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setEditedMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedGenres = Array.from(e.target.selectedOptions, (option) => option.value);
        setEditedMovie((prevMovie) => ({ ...prevMovie, genres: selectedGenres }));
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
                    <label htmlFor="releaseYear">Release Date</label>
                    <input
                        type="date"
                        id="releaseYear"
                        name="releaseYear"
                        value={editedMovie?.releaseYear?.toString()}
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
                        name="posterUrl"
                        value={editedMovie?.posterUrl}
                        onChange={handleChange}
                        required />
                </div>
                <div className="movie-form__column">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={editedMovie?.rating}
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
                        defaultValue={editedMovie.genres[0]}
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
                        value={editedMovie?.duration}
                        onChange={handleChange}
                        min={0}
                        max={500}
                        step={1}
                        required />
                </div>
            </div>
            <div className="movie-form__column">
                <label htmlFor="description">Overview</label>
                <textarea
                    id="description"
                    name="description"
                    value={editedMovie?.description}
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
