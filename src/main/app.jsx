import ReactDOM from 'react-dom';
import React from 'react';
import data from '../../data/data.js'
import SearchableMovieList from './SearchableMovieList.jsx'
import '../../css/base.css';

ReactDOM.render(
  <SearchableMovieList data={data} />,
  document.getElementById('content')
);
