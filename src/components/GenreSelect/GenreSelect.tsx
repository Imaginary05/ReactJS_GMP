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
import { useState } from 'react';
import { genres } from '../../genres-list';

export default function GenreSelect() {
    const [selectedGenreID, setSelectedGenreID] = useState<number>();

    const select = (id: number) => {
        setSelectedGenreID(id);
        console.log(selectedGenreID);
    }

    return (
        <div className='genres'>
            {
                genres.map((genre) =>
                    <div
                        className='genreContainer'
                        key={`${genre.id}${genre.title}`}
                    >
                        <button
                            className='genre'
                            onClick={() => select(genre.id)}
                        >
                            {genre.title.toUpperCase()}
                        </button>
                        <hr className={`genreSelection ${selectedGenreID === genre.id || genre.selected ? 'selected' : ''}`}/>
                    </div>
                )
            }
        </div>
    )
}
