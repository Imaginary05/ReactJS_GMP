import React, { useState } from 'react';
import GenreSelect from '../GenreSelect/GenreSelect';
import { genres } from '../../../data/genres-list';
import SortControl from '../SortControl/SortControl';
import './FilterPanel.css';
import { options } from '../../../data/sort-options';

const FilterPanel: React.FC = () => {
    const [selectedGenre, setSelectedGenre] = useState(genres[0]);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleSelectGenre = (genre: string) => {
        setSelectedGenre(genre);
    };

    const handleSelectedOption = (genre: string) => {
        setSelectedOption(genre);
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
                    options={options}
                    selectedOption={selectedOption}
                    onOptionChange={handleSelectedOption}
                ></SortControl>
            </nav>
            <hr/>
        </div>
    )
};

export default FilterPanel;
