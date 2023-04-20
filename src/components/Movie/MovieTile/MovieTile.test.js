import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MovieTile from './MovieTile';

describe('MovieTile', () => {
    const movie = {
        id: 1,
        title: 'Movie Title',
        releaseDate: '2022',
        posterPath: 'http://example.com/poster.jpg',
        genres: ['Comedy', 'Adventure'],
    };
    const onClick = jest.fn();

    afterEach(() => {
        onClick.mockClear();
    });

    it('renders movie poster, title, release year, and genres', () => {
        render(
            <MovieTile
                movie={movie}
                onTileClick={onClick}
                onEditClick={()=>{}}
                onDeleteClick={()=>{}}
            />
        );

        const poster = screen.getByAltText('Movie Title');

        expect(poster.getAttribute('src')).toBe('http://example.com/poster.jpg');
        expect(screen.getByText('Movie Title')).toBeInTheDocument();
        expect(screen.getByText('2022')).toBeInTheDocument();

        movie.genres.forEach((genre) => {
            expect(screen.getByText(movie.genres.join(', '))).toBeInTheDocument();
        });
    });

    it('calls onClick callback when clicked', () => {
        render(
            <MovieTile
                movie={movie}
                onTileClick={onClick}
                onEditClick={()=>{}}
                onDeleteClick={()=>{}}
            />
        );

        fireEvent.click(screen.getByAltText(`${movie.title}`));

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledWith(movie.id);
    });

    it('opens context menu when three dots button is clicked', () => {
        render(
            <MovieTile
                movie={movie}
                onTileClick={onClick}
                onEditClick={()=>{}}
                onDeleteClick={()=>{}}
            />
        );

        const button = screen.getByTestId('context-menu-button');

        fireEvent.click(button);
        expect(screen.getByTestId('context-menu')).toBeInTheDocument();
    });

    it('calls onEdit callback when Edit menu item is clicked', () => {
        const onEdit = jest.fn();

        render(
            <MovieTile
                movie={movie}
                onTileClick={onClick}
                onEditClick={onEdit}
                onDeleteClick={()=>{}}
            />
        );

        const button = screen.getByTestId('context-menu-button');

        fireEvent.click(button);
        fireEvent.click(screen.getByText('Edit'));

        expect(onEdit).toHaveBeenCalledTimes(1);
        expect(onEdit).toHaveBeenCalledWith(movie.id);
    });

    it('calls onDelete callback when Delete menu item is clicked', () => {
        const onDelete = jest.fn();

        render(
            <MovieTile
                movie={movie}
                onTileClick={onClick}
                onEditClick={()=>{}}
                onDeleteClick={onDelete}
            />
        );
        const button = screen.getByTestId('context-menu-button');

        fireEvent.click(button);
        fireEvent.click(screen.getByText('Delete'));

        expect(onDelete).toHaveBeenCalledTimes(1);
        expect(onDelete).toHaveBeenCalledWith(movie.id);
    });
});
