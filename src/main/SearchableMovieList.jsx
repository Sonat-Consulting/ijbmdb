import React from 'react';
import SearchBar from './SearchBar.jsx';
import MovieList from './MovieList.jsx';

class SearchableMovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {filterText: ''};
  }

  handleInput(newFilterText) {
    this.setState({filterText: newFilterText});
  }

  render (){
    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleInput.bind(this)} />
        <MovieList filterText={this.state.filterText} movies={this.props.data.movies} />
      </div>
    );
  }
}

export default SearchableMovieList;
