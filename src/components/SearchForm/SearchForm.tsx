/*
* Refer to the design prototype,
* implement a component that renders a search input and
* a button that triggers a new search.
* The component should accept two properties:
* 1. Initial search query.
* Use the value to set the initial value for the input
* 2. A "onSearch" callback property.
* Call the callback property every time the user presses Enter
* when the input has focus or when the user clicks the Search button.
* Pass current input value in callback arguments.
* */
import './SearchForm.css';
import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import React, { useState } from 'react';

interface SearchFormProps {
    initialQuery: string;
    onSearch: (query: string) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({
    initialQuery,
    onSearch,
}) => {
    const [query, setQuery] = useState(initialQuery);

    const handleQueryChange = (value: string) => {
        setQuery(value);
    };

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
       <div className='searchComponent'>
           <div className='searchText'>
               FIND YOUR MOVIE
           </div>
           <div className='searchForm'>
               <Input
                   value={initialQuery}
                   placeholder="What do you want to watch?"
                   onChange={handleQueryChange}
                   onKeyUp={handleKeyUp}
               ></Input>
               <Button
                   title="Search"
                   onClick={handleSearch}
               ></Button>
           </div>
       </div>
    )
}
