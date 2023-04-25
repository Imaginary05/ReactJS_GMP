import React from 'react';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import './FilterPanel.css';

export interface FilterPanelProps {
    genres: Array<string>;
    sortOptions: Array<string>;
    activeGenre: string;
    sortCriterion: string
    onGenreSelect: (genre: string) => void;
    onSortByOptionSelect: (criterion: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
    genres,
    sortOptions,
    activeGenre,
    sortCriterion,
    onGenreSelect,
    onSortByOptionSelect,
}) => {
    return (
        <div className='navigation'>
            <nav className='filters'>
                <GenreSelect
                    genres={genres}
                    selectedGenre={activeGenre}
                    onSelect={onGenreSelect}
                ></GenreSelect>
                <SortControl
                    options={sortOptions}
                    selectedOption={sortCriterion}
                    onOptionChange={onSortByOptionSelect}
                ></SortControl>
            </nav>
            <hr/>
        </div>
    )
};

export default FilterPanel;
