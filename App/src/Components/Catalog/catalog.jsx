import React from 'react';
import './catalog.css';
import Search from '../../Components/Search/search';
import CatalogItems from '../CatalogItems/catalogitems';
import CatalogController from '../../Controllers/CatalogController';

class Catalog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    // subscribe for return events from controller to component
    CatalogController.subscribers.push(this.refreshItems);
  }

  componentDidMount() {
    CatalogController.getItems().then((items) => {
      this.setState({
        items: items
      });
    });
  }

  refreshItems = (items) => {
    this.setState({
      items: items
    })
  }

  render() {
    return <div className="app-right-column">
      <Search setSearchString={CatalogController.setSearchString} />
      <div className="column content">
        <CatalogItems items={this.state.items} />
      </div>
    </div>;
  }
}

export default Catalog;