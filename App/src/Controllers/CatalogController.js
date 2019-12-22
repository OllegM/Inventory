import catalog from '../catalog';

class CatalogControler {

  constructor() {
    this._items = catalog;
    this._itemsCount = 0;
    this.subscribers = [];
    this._filter = {
      role: new Set(),
      type: new Set(),
      searchString: ""
    };
  }

  getItems() {
    return new Promise((resolve) => {
      resolve(this._getItems());
    });
  }

  getItemsCount = () => { 
    return this._itemsCount;
  }

  _getItems() {
    var items;
    if (this._filter.role.size === 0 && this._filter.searchString === "" && this._filter.type.size === 0) {
      items = this.getAllItems();
    } else {
      items = this.getFilteredItems();
    }
    this._itemsCount = items.length;
    return items;
  }

  getAllItems = () => {
    return this._items;
  }

  getFilteredItems = () => {
      return this._items.filter((item) => {
        if (
          (this._filter.role.size === 0 || this._filter.role.has(item.role)) &&
          (this._filter.type.size === 0 || this._filter.type.has(item.type)) &&
          (this._filter.searchString === "" || item.title.toLowerCase().indexOf(this._filter.searchString.toLowerCase()) >= 0)
        ) {
          return item;
        } else {
          return null;
        };
      });
  }

  setFilter = (role, type) => {
    this._filter.role = role;
    this._filter.type = type;
    this.updateSubscribers();
  }

  setSearchString = (searchString) => {
    this._filter.searchString = searchString;
    this.updateSubscribers();
  }

  updateSubscribers = () => {
    this.subscribers.forEach((action) => {
      action(this._getItems());
    });
  }
}

export default new CatalogControler();