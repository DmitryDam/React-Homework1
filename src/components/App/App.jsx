import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import MovieList from '../MovieList/MovieList';
import MovieForm from '../MovieForm/MovieForm';
import movies from 'bdFilms.jsx';

class App extends React.Component {
    state = {
    movies: movies
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <Header text="Movie Mate"/>
        <AppBody>
          <MovieList moviesObj={movies} />
          <MovieForm title="Title" description="Description" rating="Rating" />

        </AppBody>
      </div>
    );
  }
}

export default App;