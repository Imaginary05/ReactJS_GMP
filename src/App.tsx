import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm/SearchForm';
import FilterPanel from './components/Filtering/FilterPanel/FilterPanel';
import MovieList from './components/Movie/MovieList/MovieList';
import Dialog from './components/Dialog/Dialog';
import MovieForm from './components/Movie/MovieForm/MovieForm';

function App() {
    const [showAddMovieDialog, setShowAddMovieDialog] = useState(false);

    const handleSearch = (query: string) => {
        console.log(`Searching for ${query}`);
    };

    const handleAddMovie = () => {
        setShowAddMovieDialog(true);
    }

    const handleDialogClose = () => {
        setShowAddMovieDialog(false);
    }

    return (
        <div className="appContainer">
            <header className='header'>
                <button
                    className='add-movie'
                    onClick={handleAddMovie}
                >+ ADD MOVIE</button>
                <SearchForm
                    initialQuery=''
                    onSearch={handleSearch}
                ></SearchForm>
            </header>

            <main className='main'>
                <FilterPanel></FilterPanel>
                <MovieList></MovieList>
            </main>

            <footer>

            </footer>

            {
                showAddMovieDialog && (
                    <Dialog
                        title={`add movie`.toUpperCase()}
                        children={
                            <MovieForm
                                onSubmit={()=>{}}
                            ></MovieForm>
                        }
                        onClose={handleDialogClose}
                    ></Dialog>
                )
            }
        </div>
    );
}

export default App;
