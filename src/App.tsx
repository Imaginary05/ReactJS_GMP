import React from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import FilterPanel from './components/Filtering/FilterPanel/FilterPanel';
import MovieListPage from './components/Movie/MovieListPage/MovieListPage';

function App() {
    const handleSearch = (query: string) => {
        console.log(`Searching for ${query}`);
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
                <FilterPanel></FilterPanel>
                <MovieListPage></MovieListPage>
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default App;
