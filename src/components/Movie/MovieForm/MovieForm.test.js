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
        const releaseDateInput = screen.getByLabelText(/release date/i);
        const posterPathInput = screen.getByLabelText(/movie url/i);
        const voteAverageInput = screen.getByLabelText(/voteAverage/i);
        const genresInput = screen.getByLabelText(/genres/i);
        const runtimeInput = screen.getByLabelText(/runtime/i);
        const overviewInput = screen.getByLabelText(/overview/i);
        const submitButton = screen.getByRole('button', { name: /submit/i });

        fireEvent.change(titleInput, { target: { value: 'Test Movie' } });
        fireEvent.change(releaseDateInput, { target: { value: '2022-01-01' } });
        fireEvent.change(posterPathInput, {
            target: { value: 'https://example.com/image.jpg' },
        });
        fireEvent.change(voteAverageInput, { target: { value: 7.5 } });
        fireEvent.change(genresInput, { target: { value: genres[1] } });
        fireEvent.change(runtimeInput, { target: { value: 90 } });
        fireEvent.change(overviewInput, {
            target: { value: 'Test overview' },
        });

        fireEvent.click(submitButton);

        expect(onSubmit).toHaveBeenCalledWith({
            title: 'Test Movie',
            posterPath: 'https://example.com/image.jpg',
            releaseDate: '2022-01-01',
            genres: [genres[1]],
            duration: "90",
            voteAverage: "7.5",
            overview: 'Test overview',
        });
    });

    it('should reset the form', () => {
        const initialMovie = {
            id: 0,
            title: 'Test Movie',
            posterPath: 'https://example.com/image.jpg',
            releaseDate: '2022-01-01',
            genres: [genres[1]],
            runtime: "90",
            duration: "90",
            voteAverage: "7.5",
            overview: 'Test overview',
        };
        const onSubmit = jest.fn();

        render(
            <MovieForm
                movie={initialMovie}
                onSubmit={onSubmit}
            />
        );

        const titleInput = screen.getByLabelText(/title/i);
        const releaseDateInput = screen.getByLabelText(/release date/i);
        const posterPathInput = screen.getByLabelText(/movie url/i);
        const voteAverageInput = screen.getByLabelText(/voteAverage/i);
        const genresInput = screen.getByLabelText(/genres/i);
        const runtimeInput = screen.getByLabelText(/runtime/i);
        const overviewInput = screen.getByLabelText(/overview/i);
        const resetButton = screen.getByRole('button', { name: /reset/i });

        fireEvent.change(titleInput, { target: { value: 'Test Movie 2' } });
        fireEvent.change(releaseDateInput, { target: { value: '2022-02-02' } });
        fireEvent.change(posterPathInput, {
            target: { value: 'https://example.com/image2.jpg' },
        });
        fireEvent.change(voteAverageInput, { target: { value: 2.5 } });
        fireEvent.change(genresInput, { target: { value: genres[2] } });
        fireEvent.change(runtimeInput, { target: { value: 20 } });
        fireEvent.change(overviewInput, {
            target: { value: 'Test overview 2' },
        });

        fireEvent.click(resetButton);

        expect(titleInput.value).toEqual(initialMovie.title);
        expect(releaseDateInput.value).toEqual(initialMovie.releaseDate);
        expect(posterPathInput.value).toEqual(initialMovie.posterPath);
        expect(voteAverageInput.value).toEqual(initialMovie.voteAverage);
        expect([genresInput.value]).toEqual(initialMovie.genres);
        expect(runtimeInput.value).toEqual(initialMovie.runtime);
        expect(overviewInput.value).toEqual(initialMovie.overview);
    });
});
