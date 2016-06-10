import React from 'react';

class MovieRow extends React.Component {
  render() {

    var link = "http://www.imdb.com/title/" + this.props.imdbID;

    return (
      <div className="movieRow">
        <div className="coverImg"><img src={this.props.poster} alt="" /></div>
        <h2>{this.props.title}<span className="year">({this.props.year})</span></h2>
        <div className="plot">{this.props.plot}</div>
        <div className="actors">
          <span>Actors: </span>
          <span>{this.props.actors}</span>
          <span> <a href={link} title="Goto imdb">More</a></span>
        </div>
      </div>
    )
  }
}

export default MovieRow;
