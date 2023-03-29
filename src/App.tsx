import React from 'react';
import './App.css';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';

function App() {
    const initialCount = 10;

    return (
        <div className="appContainer">
            <header className='header'>
                <SearchForm></SearchForm>
            </header>

            <main className='main'>
                <div className='filters'>
                    <GenreSelect></GenreSelect>
                </div>
                <hr/>
                <div className='movieList'>

                </div>
            </main>

            <footer>
                <Counter count={initialCount}></Counter>
            </footer>
        </div>
    );
}

export default App;
