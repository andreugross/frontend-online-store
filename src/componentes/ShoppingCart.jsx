import React, { Component } from 'react';
/* import Card from './Card'; */
import { getProducts, saveProducts } from '../services/storage';
import NewCount from './NewCount';

class ShoppingCart extends Component {
  state = {
    cartInfo: [],
    newRender: [],
    // quantity
  };

  componentDidMount() {
    const array = [];
    const arrayDois = [];
    const get = getProducts();
    /* console.log('log', get); */
    this.setState({
      cartInfo: get,
    });
    if (get !== null) {
      const peter = get.map((age) => age.id);
      peter.forEach((remedio) => {
        if (!array.includes(remedio)) {
          array.push(remedio);
        }
      });
    }
    array.forEach((e) => {
      const val = get.find((sad) => sad.id === e);
      if (val) arrayDois.push(val);
    });
    this.setState({
      newRender: arrayDois,
    });
  }

  removeProducts = (id) => {
    const { cartInfo } = this.state;
    const lacRevolt = cartInfo.filter((dan) => dan.id !== id);
    console.log(lacRevolt);
    saveProducts(lacRevolt);
    this.setState({
      newRender: lacRevolt,
    });
  };

  render() {
    const { cartInfo, newRender } = this.state;
    return (
      <div>
        {cartInfo !== null ? (

          newRender.map((info) => (
            <NewCount
              key={ info.id }
              cartInfo={ cartInfo }
              newRender={ newRender }
              info={ info }
              removeProducts={ this.removeProducts }
            />
          ))
        ) : (

          <div>
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          </div>
        )}
      </div>
    );
  }
}
export default ShoppingCart;
