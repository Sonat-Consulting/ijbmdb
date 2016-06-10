import React from 'react';
import MovieRow from './MovieRow.jsx';

class MovieList extends React.Component {
  render() {

    var movieRows = [];
    var filterText = this.props.filterText;

    this.props.movies.forEach((movie) => {

      if (movie.Title.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
        return;
      }

      movieRows.push ( <MovieRow
        title={movie.Title}
        poster={movie.Poster}
        year={movie.Year}
        plot={movie.Plot}
        actor={movie.Actors}
        imdbID={movie.imdbID}
        key={movie.imdbID}
      /> );
    });

    return (
      <div>
        {movieRows}
      </div>
    );
  }
}

export default MovieList;
