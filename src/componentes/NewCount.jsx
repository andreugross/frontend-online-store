import React from 'react';
import PropTypes from 'prop-types';
import { getProducts } from '../services/storage';

class NewCount extends React.Component {
  constructor() {
    super();
    this.state = {
      increase: 1,
    };
  }

  componentDidMount() {
    const { info: { id } } = this.props;
    const increase = JSON.parse(localStorage.getItem(id)) || 1;
    this.setState({
      increase,
    });
  }

  handleClick = ({ target }) => {
    const { name } = target;
    const { info: { id } } = this.props;
    if (name === 'increase') {
      getProducts();
      this.setState(({ increase }) => ({
        increase: increase + 1,
      }), () => {
        const { increase } = this.state;
        localStorage.setItem(id, increase);
      });
    } else {
      this.setState(({ increase }) => ({
        increase: increase > 1 ? increase - 1 : 1,
      }), () => {
        const { increase } = this.state;
        localStorage.setItem(id, increase);
      });
    }
  };

  // removeProduct = () => {
  //   if () {

  //   }
  // };

  render() {
    const { increase } = this.state;
    const { info, removeProducts } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">{increase || 1}</p>

        <div>
          <button
            data-testid="remove-product"
            type="button"
            onClick={ () => removeProducts(info.id) }
          >
            x
          </button>
          <button
            data-testid="product-increase-quantity"
            type="button"
            name="increase"
            onClick={ this.handleClick }
          >
            +
          </button>
          <button
            data-testid="product-decrease-quantity"
            type="button"
            name="decrease"
            onClick={ this.handleClick }
          >
            -
          </button>
        </div>

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
    );
  }
}

NewCount.propTypes = {
  info: PropTypes.shape().isRequired,
  removeProducts: PropTypes.func.isRequired,
};

export default NewCount;
