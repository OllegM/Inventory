import React from 'react';
import CatalogController from '../../Controllers/CatalogController';

export class CatalogItems extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    // subscribe for return events from controller to component
    CatalogController.subscribers.push(this.refreshItems);
  }

  refreshItems = (items) => {
    this.setState({
      items: items
    })
  }

  render() {
    const items = this.props.items.map(item => {
      return <CatalogItem key={item.id} item={item} />;
    });
    return items;
  }
}


export class CatalogItem extends React.Component {
  render() {
    const item = this.props.item;
    var roleClassName = '';
    switch (item.role) {
      case 'Пользователь':
        roleClassName = 'blue';
        break;
      case 'Владелец':
        roleClassName = 'green';
        break;
      case 'Пользователь и Владелец':
        roleClassName = 'red';
        break;
      default:
        break;
    }

    var itemImage = '';
    switch (item.type) {
      case 'Компьютер':
        itemImage = 'images/svg/thinclient.svg';
        break;
      case 'Телефон':
        itemImage = 'images/svg/phone.svg';
        break;
      case 'Монитор':
        itemImage = 'images/svg/monitor.svg';
        break;
      default:
        break;
    }

    return <div className="item">

      <div className={'status ' + roleClassName}>{item.role}</div>

      <div className="title">
        <img src={itemImage} alt="" />
        <span>{item.title}</span>
      </div>
      <div className="details">
        <div className="details-item">
          <div className="details-title">Серийный номер</div>
          <div className="details-value">{item.serial}</div>
        </div>
        <div className="details-item">
          <div className="details-title">Код ЕСН</div>
          <div className="details-value">{item.code_ehd}</div>
        </div>
        <div className="details-item">
          <div className="details-title">Код СА</div>
          <div className="details-value">{item.code_ca}</div>
        </div>
        <div className="details-item">
          <div className="details-title">Инвентарный номер</div>
          <div className="details-value">{item.inventory_num}</div>
        </div>
      </div>
      <hr />
      <div className="info">
        <div className="left">
          <div className="info-title">Последняя активность</div>
          <div className="info-date">{item.last_activity}</div>
        </div>
        <div className="right">
          <div className="info-title">Устройство у сотрудника</div>
          <div className="info-name">{item.owner_fio}</div>
        </div>
      </div>
    </div>;
  }
}

export default CatalogItems;