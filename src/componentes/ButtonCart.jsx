import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ButtonCart extends Component {
  render() {
    return (
      <form>
        <Link to="/shopping-cart">
          <label>
            <input
              type="button"
              name="button"
              data-testid="shopping-cart-button"
              value="Carrinho"
            />
          </label>
        </Link>
      </form>
    );
  }
}
