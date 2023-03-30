/*
* Refer to the design prototype, implement a component
* that renders a list of movie genres with currently selected genre highlighted.
* The component should accept three properties:
* 1. A list of genre names to display.
* Use the incoming list to render genre buttons.
* 2. A name of currently selected genre.
* Use the name to identify which button to highlight.
* 3. A "onSelect" callback property.
* Call the callback function when the user clicks on any genre button.
* Pass respective genre name to the callback arguments.
* */
import './GenreSelect.css'
import React from 'react';

interface GenreSelectProps {
    genres: string[];
    selectedGenre: string;
    onSelect: (genre: string) => void;
}

export const GenreSelect: React.FC<GenreSelectProps> = ({
    genres,
    selectedGenre,
    onSelect,
}) => {

    return (
        <div className='genres'>
            {
                genres.map((genre) =>
                    <div
                        className='genreContainer'
                        key={genre}
                    >
                        <button
                            className={`genre${genre === selectedGenre ? ' selected' : ''}`}
                            onClick={() => onSelect(genre)}
                        >
                            {genre.toUpperCase()}
                        </button>
                    </div>
                )
            }
        </div>
    )
}
