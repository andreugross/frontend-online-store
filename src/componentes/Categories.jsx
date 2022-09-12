import React, { Component } from 'react';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from '../services/api';
import Card from './Card';

class Categories extends Component {
  state = {
    categories: [],
    filterCategories: [],
  };

  async componentDidMount() {
    const getApi = await getCategories();
    this.setState({
      categories: getApi,
    });
  }

  handleClick = async ({ target }) => {
    const { id } = target;
    const response = await getProductsFromCategoryAndQuery(id);
    this.setState({
      filterCategories: response.results,
    });
  };

  render() {
    const { categories, filterCategories } = this.state;

    return (
      <div>
        {categories.map((categoria) => (
          <div
            key={ categoria.id }
          >
            <input
              /* data-testid="category" */
              name="name"
              type="radio"
              id={ categoria.id }
              data-testid="category"
              onClick={ this.handleClick }
            />
            <label htmlFor={ categoria.id }>{categoria.name}</label>
          </div>
        ))}
        <div>
          {filterCategories.map((element) => (
            <div key={ element.id }>
              <Card
                way={ `/description/${element.id}` }
                key={ element.id }
                name={ element.title }
                price={ element.original_price }
                thumbnail={ element.thumbnail }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Categories;
