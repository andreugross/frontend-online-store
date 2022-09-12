import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { name, price, thumbnail, way } = this.props;
    return (
      <Link to={ way } data-testid="product-detail-link">
        <div data-testid="product">
          <p data-testid="product-detail-name">{name}</p>
          <p data-testid="product-detail-price">{price}</p>
          <img data-testid="product-detail-image" src={ thumbnail } alt={ name } />
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  way: PropTypes.string,
}.isRequired;

export default Card;
