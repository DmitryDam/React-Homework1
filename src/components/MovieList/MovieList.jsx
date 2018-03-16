import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {


	render() {
		const { moviesObj } = this.props;
		return (
			<div className="MovieList">
			{moviesObj.map((movieList) => <MovieCard {...movieList} key={movieList.id} />)}
			

			</div>
		);
	}
}

export default MovieList;
