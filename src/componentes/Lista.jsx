import React, { Component } from 'react';
import ButtonCart from './ButtonCart';

class Lista extends Component {
  render() {
    return (
      <div>
        <h1 data-testid="home-initial-message">
          <ButtonCart />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </div>
    );
  }
}
export default Lista;
