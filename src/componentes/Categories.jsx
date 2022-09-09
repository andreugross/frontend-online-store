import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const getApi = await getCategories();
    this.setState({
      categories: getApi,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        {
          categories.map((categoria) => (
            <div
              key={ categoria.id }
              data-testid="category"
            >
              <input
                key={ categoria.id }
                /* data-testid="category" */
                name="name"
                type="radio"
                id={ categoria.id }
              />
              <label htmlFor={ categoria.id }>
                {categoria.name}

              </label>
            </div>
          ))
        }

      </div>
    );
  }
}
export default Categories;
