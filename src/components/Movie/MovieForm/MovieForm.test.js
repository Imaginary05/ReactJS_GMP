import { fireEvent, render, screen } from '@testing-library/react';
import MovieForm from './MovieForm';
import { genres } from '../../../data/genres-list';

describe('MovieForm', () => {
    it('should submit the form with valid data', () => {
        const onSubmit = jest.fn();

        render(
            <MovieForm
                onSubmit={onSubmit}
            />
        );

        const titleInput = screen.getByLabelText(/title/i);
        const releaseYearInput = screen.getByLabelText(/release date/i);
        const posterUrlInput = screen.getByLabelText(/movie url/i);
        const ratingInput = screen.getByLabelText(/rating/i);
        const genresInput = screen.getByLabelText(/genres/i);
        const runtimeInput = screen.getByLabelText(/runtime/i);
        const descriptionInput = screen.getByLabelText(/overview/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(titleInput, { target: { value: 'Test Movie' } });
        fireEvent.change(releaseYearInput, { target: { value: '2022-01-01' } });
        fireEvent.change(posterUrlInput, {
            target: { value: 'https://example.com/image.jpg' },
        });
        fireEvent.change(ratingInput, { target: { value: 7.5 } });
        fireEvent.change(genresInput, { target: { value: genres[1] } });
        fireEvent.change(runtimeInput, { target: { value: 90 } });
        fireEvent.change(descriptionInput, {
            target: { value: 'Test description' },
        });

        fireEvent.click(submitButton);

        expect(onSubmit).toHaveBeenCalledWith({
            id: 0,
            title: 'Test Movie',
            posterUrl: 'https://example.com/image.jpg',
            releaseYear: '2022-01-01',
            genres: [genres[1]],
            duration: "90",
            rating: "7.5",
            description: 'Test description',
        });
    });

    it('should reset the form', () => {
        const initialMovie = {
            id: 0,
            title: 'Test Movie',
            posterUrl: 'https://example.com/image.jpg',
            releaseYear: '2022-01-01',
            genres: [genres[1]],
            duration: "90",
            rating: "7.5",
            description: 'Test description',
        };
        const onSubmit = jest.fn();

        render(
            <MovieForm
                movie={initialMovie}
                onSubmit={onSubmit}
            />
        );

        const titleInput = screen.getByLabelText(/title/i);
        const releaseYearInput = screen.getByLabelText(/release date/i);
        const posterUrlInput = screen.getByLabelText(/movie url/i);
        const ratingInput = screen.getByLabelText(/rating/i);
        const genresInput = screen.getByLabelText(/genres/i);
        const runtimeInput = screen.getByLabelText(/runtime/i);
        const descriptionInput = screen.getByLabelText(/overview/i);
        const resetButton = screen.getByRole('button', { name: /reset/i });

        fireEvent.change(titleInput, { target: { value: 'Test Movie 2' } });
        fireEvent.change(releaseYearInput, { target: { value: '2022-02-02' } });
        fireEvent.change(posterUrlInput, {
            target: { value: 'https://example.com/image2.jpg' },
        });
        fireEvent.change(ratingInput, { target: { value: 2.5 } });
        fireEvent.change(genresInput, { target: { value: genres[2] } });
        fireEvent.change(runtimeInput, { target: { value: 20 } });
        fireEvent.change(descriptionInput, {
            target: { value: 'Test description 2' },
        });

        fireEvent.click(resetButton);

        expect(titleInput.value).toEqual(initialMovie.title);
        expect(releaseYearInput.value).toEqual(initialMovie.releaseYear);
        expect(posterUrlInput.value).toEqual(initialMovie.posterUrl);
        expect(ratingInput.value).toEqual(initialMovie.rating);
        expect([genresInput.value]).toEqual(initialMovie.genres);
        expect(runtimeInput.value).toEqual(initialMovie.duration);
        expect(descriptionInput.value).toEqual(initialMovie.description);
    });
});
