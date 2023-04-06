import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter/Counter';
import { SearchForm } from './components/SearchForm/SearchForm';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { genres } from './genres-list';

function App() {
    const initialCount = 10;

    const handleSearch = (query: string) => {
        console.log(`Searching for ${query}`);
    };

    const [selectedGenre, setSelectedGenre] = useState(genres[0]);

    const handleSelectGenre = (genre: string) => {
        setSelectedGenre(genre);
    };

    return (
        <div className="appContainer">
            <header className='header'>
                <SearchForm
                    initialQuery=''
                    onSearch={handleSearch}
                ></SearchForm>
            </header>

            <main className='main'>
                <div className='filters'>
                    <GenreSelect
                        genres={genres}
                        selectedGenre={selectedGenre}
                        onSelect={handleSelectGenre}
                    ></GenreSelect>
                </div>
                <hr/>
                <div className='movieList'>

                </div>
            </main>

            <footer>
                <Counter initialCount={initialCount}></Counter>
            </footer>
        </div>
    );
}

export default App;
