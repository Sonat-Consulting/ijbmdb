import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {inpText: ''};
  }

  handleChange() {
    this.setState({inpText: this.refs.filterTextInp.value});
  }

  handleClick(){
    this.props.onUserInput(this.state.inpText);
  }

  render(){
    return (
      <div>
        <input onChange={this.handleChange.bind(this)} ref="filterTextInp" type="text" className="searchField" value={this.state.inpText} placeholder="Search..." />
        <button onClick={this.handleClick.bind(this)} >search</button>
      </div>
    );
  }
}

export default SearchBar;
