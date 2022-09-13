import React, { Component } from 'react';
/* import Card from './Card'; */
import { getProducts } from '../services/storage';

class ShoppingCart extends Component {
  state = {
    cartInfo: [],
    newRender: [],
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

  render() {
    const { cartInfo, newRender } = this.state;
    return (
      <div>
        {cartInfo !== null ? (

          newRender.map((info) => (
            <div key={ info.id }>
              <p data-testid="shopping-cart-product-quantity">
                {
                  cartInfo.reduce((acc, val) => {
                    let cont = acc;
                    if (val.id === info.id) {
                      cont += 1;
                    } return cont;
                  }, 0)
                }
              </p>
              <div>
                <p data-testid="shopping-cart-product-name">
                  { info.title }
                </p>
                <p>
                  { info.price }
                </p>
                <img
                  src={ info.thumbnail }
                  alt={ info.title }
                />
              </div>
            </div>
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
