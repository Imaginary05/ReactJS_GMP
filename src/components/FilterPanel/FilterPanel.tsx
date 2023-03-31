import React, { useState } from 'react';
import GenreSelect from '../GenreSelect/GenreSelect';
import { genres } from '../../data/genres-list';
import SortControl from '../SortControl/SortControl';
import './FilterPanel.css';

const FilterPanel: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);

    const handleSelectGenre = (genre: string) => {
        setSelectedGenre(genre);
    };

    return (
        <div className='navigation'>
            <nav className='filters'>
                <GenreSelect
                    genres={genres}
                    selectedGenre={selectedGenre}
                    onSelect={handleSelectGenre}
                ></GenreSelect>
                <SortControl
                    selectedOption=''
                    onOptionChange={() => {}}
                ></SortControl>
            </nav>
            <hr/>
        </div>
    )
};

export default FilterPanel;
