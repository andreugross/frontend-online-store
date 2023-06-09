import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import * as api from './services/api';
import Lista from './componentes/Lista';
import Categories from './componentes/Categories';
import ShoppingCart from './componentes/ShoppingCart';
import DetailProduct from './componentes/DetailProduct';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Lista } />
          <Route exact path="/categories" component={ Categories } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/description/:id" component={ DetailProduct } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
