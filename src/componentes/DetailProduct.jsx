import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from './ButtonCart';
import CardDetail from './CardDetail';
import { getProductsFromId } from '../services/api';

export default class DetailProduct extends Component {
  state = {
    productResult: '',
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const response = await getProductsFromId(id);
    console.log(response);
    this.setState({
      productResult: response,
    });
  }

  render() {
    const { productResult } = this.state;
    return (
      <div>
        <CardDetail
          name={ productResult.title }
          price={ productResult.price }
          thumbnail={ productResult.thumbnail }
          id={ productResult.id }
          click={ [productResult] }
        />
        <ButtonCart />
      </div>
    );
  }
}

DetailProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
