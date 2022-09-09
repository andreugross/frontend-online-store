import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { name, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <p>{name}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ name } />
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default Card;
