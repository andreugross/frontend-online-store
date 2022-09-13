import React, { Component } from 'react';
import Categories from './Categories';
import ButtonCart from './ButtonCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

class Lista extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      data: [],
      isNotFound: true,
    };
  }

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  handleClick = async () => {
    const { search } = this.state;
    const response = await getProductsFromCategoryAndQuery(search, search);
    this.setState({
      data: response.results,
      isNotFound: false,
    });
  };

  render() {
    const { search, data, isNotFound } = this.state;
    return (
      <div>
        <h1 data-testid="home-initial-message">
          <ButtonCart />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        <label htmlFor="query-input">
          <input
            data-testid="query-input"
            type="text"
            value={ search }
            onChange={ this.handleInput }
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        {isNotFound ? (
          <p>Nenhum produto foi encontrado</p>
        ) : (
          data.map((item) => (
            <Card
              way={ `/description/${item.id}` }
              key={ item.id }
              name={ item.title }
              price={ item.original_price }
              thumbnail={ item.thumbnail }
              id={ item.id }
            />
          ))
        )}
        <Categories />
      </div>
    );
  }
}
export default Lista;
