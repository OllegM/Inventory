import React from 'react';
import Navigation from '../Navigation/navigation';
import Catalog from '../Catalog/catalog';

function Content() {
  return <div className="app-content-base">
    <div className="app-content">
    <Navigation />
    <Catalog />
    </div>
  </div>;
}

export default Content;