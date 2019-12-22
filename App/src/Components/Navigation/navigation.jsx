import React from 'react';
import './navigation.css';
import CatalogController from '../../Controllers/CatalogController';

const roles = [
  'Пользователь',
  'Владелец',
  'Пользователь и владелец'
]

const types = [
  'Монитор',
  'Компьютер',
  'Телефон'
]

class Navigation extends React.Component {

  componentWillMount = () => {
    this.selectedRoles = new Set();
    this.selectedTypes = new Set();
  }

  createCheckbox = (label, toggler) => (
    <li>
      <input type="checkbox" id={label} name={label} onClick={toggler} />
      <label for={label}>{label}</label></li>
  )

  toggleRole = (event) => {
    var target = event.target;
    if (target.checked) {
      this.selectedRoles.add(target.name);
    } else {
      this.selectedRoles.delete(target.name);
    }
  }

  toggleType = (event) => {
    var target = event.target;
    if (target.checked) {
      this.selectedTypes.add(target.name);
    } else {
      this.selectedTypes.delete(target.name);
    }
    this.updateFilter();
  }

  updateFilter = () => {
    CatalogController.setFilter(this.selectedRoles, this.selectedTypes);
  };

  createCheckboxes = (items, toggler) => (
    items.map((item) => this.createCheckbox(item, toggler))
  )

  render() {
    return <div className="app-left-column">
      <div className="app-nav">
        <div className="title">Роль</div>
        <ul>
          {this.createCheckboxes(roles, this.toggleRole)}
        </ul>
        <div className="title">Тип</div>
        <ul>
          {this.createCheckboxes(types, this.toggleType)}
        </ul>
      </div>
    </div>;
  };
}

export default Navigation;