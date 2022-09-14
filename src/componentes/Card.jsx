import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { saveProducts, getProducts } from '../services/storage';
/* import { getProductsFromId } from '../services/api'; */

class Card extends React.Component {
  // state = {
  //   prod: [],
  // };

  // componentDidMount() {
  //   const prod = getProducts() || [];
  //   this.setState({
  //     prod,
  //   });
  // }

  // handleCLick = (event, func) => {
  //   const { target } = event;
  //   const { name } = target;
  //   // const { prod } = this.state;
  //   const act = func.find((element) => element.id === name);
  //   this.setState((prevState) => ({
  //     prod: [...prevState.prod, act],
  //   }), () => {
  //     const { prod } = this.state;
  //     saveProducts(prod);
  //   });
  // };

  handleCLick = (event, func) => {
    const { target } = event;
    const { name } = target;
    const act = func.find((element) => element.id === name);
    const prod = getProducts();
    if (prod === null) {
      saveProducts([act]);
    } else {
      saveProducts([...prod, act]);
    }
  };

  render() {
    const { name, price, thumbnail, way, id, click } = this.props;
    /* const { click } = this.state; */
    return (
      <div>
        <Link to={ way } data-testid="product-detail-link">
          <div data-testid="product">
            <p data-testid="product-detail-name">{name}</p>
            <p data-testid="product-detail-price">{price}</p>
            <img data-testid="product-detail-image" src={ thumbnail } alt={ name } />
          </div>
        </Link>
        <div>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ (event) => this.handleCLick(event, click) }
            name={ id }
          >
            add cart
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  way: PropTypes.string,
  id: PropTypes.string,
  click: PropTypes.arrayOf,
}.isRequired;

export default Card;
