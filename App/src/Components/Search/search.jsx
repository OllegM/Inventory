import React from 'react';
import './search.css';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    }
  }

  onSearchStringChange = (event) => {
    this.setState({
      searchString: event.target.value
    });

    this.props.setSearchString(event.target.value);
  };

  render() {
    return <div className="column header">
      <div className="search">
        <input type="text" placeholder="Поиск" onChange={this.onSearchStringChange} />
      </div>
    </div>;
  }
}






export default Search;