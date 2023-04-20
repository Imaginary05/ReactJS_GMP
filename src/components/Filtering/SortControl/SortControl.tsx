// This component will render a label "Sort by" and
// a select control to the right.
// Select should have the following options:
// Release Date
// Title
// The component should take a property that specifies current selection.
// Additionally, it should take a callback property
// to handle selection changes.
// The callback should be called every time a user changes "Sort by" value.
// The new value should be passed in callback arguments.
import './SortControl.css';
import React from 'react';

export interface SortControlProps {
    options: Array<string>;
    selectedOption: string;
    onOptionChange: (option: string) => void;
}

const SortControl: React.FC<SortControlProps> = ({
    options,
    selectedOption,
    onOptionChange }) =>
{
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onOptionChange(event.target.value);
    };

    return (
        <div className='sort' data-testid='sort-control'>
            <label
                className='sort-label'
                htmlFor="sort-select"
            >Sort by</label>
            <select
                className='sort-select'
                id="sort-select"
                value={selectedOption}
                onChange={handleOptionChange}
            >
                {options.map((option: string) => (
                    <option
                        key={option}
                        value={option}
                    >{option}</option>
                ))}
            </select>
        </div>
    );
};

export default SortControl;
