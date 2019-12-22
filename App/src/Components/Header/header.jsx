import React from 'react';
import './header.css';
import CatalogController from '../../Controllers/CatalogController';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsCount: 0
    };
    CatalogController.subscribers.push(this.refreshItems);
  }

  componentDidMount() {
    CatalogController.getItems().then((items) => {
      this.setState({
        itemsCount: items.length
      });
    })
  }
  
  refreshItems = (items) => {
    this.setState({
      itemsCount: items.length
    });
  }

  render() {
    return <div className="app-header-base">
      <div className="app-header">
        <div className="breadcrumbs">
          <span>Личный кабинет</span>
          <span>Оборудование</span>
        </div>
        <div className="header-title">
          <div>Оборудование</div>
          <div className="count">{this.state.itemsCount}</div>
        </div>
      </div>
    </div>;
  }
}

export default Header;
