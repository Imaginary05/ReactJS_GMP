// Test that component renders all genres passed in props
// Test that component highlights a selected genre passed in props
// Test that after a click event on a genre button component calls "onChange" callback
// and passes correct genre in arguments
import { GenreSelect } from './GenreSelect';
import { fireEvent, render, screen } from '@testing-library/react';
import { genres } from '../../genres-list';

describe('GenreSelect', () => {
    it('renders all genres passed in props', () => {
        render(<GenreSelect
                genres={genres}
                selectedGenre=""
                onSelect={() => {}}/>);

        genres.forEach((genre) => {
            expect(screen.getAllByText((content, element) => {
                // Check if the element contains the genre text and is a button
                return element.tagName.toLowerCase() === 'button' && content.includes(genre.toUpperCase());
            })).toHaveLength(1);
        });
    });

    it('highlights the selected genre passed in props', () => {
        const selectedGenre = genres[1];
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={() => {}} />);

        const selectedButton = screen.getByText((content, element) => {
            return element.tagName.toLowerCase() === 'button' && content.includes(selectedGenre.toUpperCase());
        });
        expect(selectedButton).toHaveClass('selected');
    });

    it('calls the onChange callback with the correct genre after clicking a genre button', () => {
        const selectedGenre = genres[2];
        const onSelect = jest.fn();
        render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onSelect} />);

        const newGenre = genres[0];

        const selectedButton = screen.getByText((content, element) => {
            return element.tagName.toLowerCase() === 'button' && content.includes(newGenre.toUpperCase());
        });
        fireEvent.click(selectedButton);

        expect(onSelect).toHaveBeenCalledWith(newGenre);
    });
});
