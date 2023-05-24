import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { email, ratingValue, description } = this.props;
    return (
      <div>
        <h2>Avaliações</h2>
        <form>
          <label htmlFor="email-input">
            E-mail
            <input
              name="email"
              type="email"
              id="email-input"
              value={ email }
              required
            />
          </label>
          <br />
          <div name="ratio-input" value={ ratingValue } required>
            <label htmlFor="ratio-1">
              <input type="radio" id="ratio-1" name="ratio-input" />
              01
            </label>
            <label htmlFor="ratio-2">
              <input type="radio" id="ratio-2" name="ratio-input" />
              02
            </label>
            <label htmlFor="ratio-2">
              <input type="radio" id="ratio-3" name="ratio-input" />
              03
            </label>
            <label htmlFor="ratio-2">
              <input type="radio" id="ratio-4" name="ratio-input" />
              04
            </label>
            <label htmlFor="ratio-2">
              <input type="radio" id="ratio-5" name="ratio-input" />
              05
            </label>
          </div>
          <br />
          <label htmlFor="detail-rating">
            Mensagem (Opcional)
            <input
              name="description"
              type="textarea"
              id="detail-rating"
              value={ description }
            />
          </label>
          <br />
          <button type="button">Avaliar</button>
        </form>
      </div>
    );
  }
}

Rating.propTypes = {
  email: PropTypes.string,
  ratingValue: PropTypes.string,
  description: PropTypes.string.isRequired,
}.isRequired;
