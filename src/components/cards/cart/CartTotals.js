import React from "react";
import { Link } from "react-router-dom";

import '../cards.css';

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sl-5 ml-md-auto col-sm-8 text-capitalize- text-right">
            <Link to="/">
              <button
                id='myButtonClear'
                type="button"
                onClick={() => clearCart()}
              >
                Clear cart
              </button>
            </Link>
            <div id='finalCart'>
              <h5>
                <span className="text-title">Subtotal :</span>
                <strong>$ {cartSubTotal}</strong>
              </h5>
              <h5>
                <span className="text-title">Tax :</span>
                <strong>$ {cartTax}</strong>
              </h5>
              <h5>
                <span className="text-title" >Total :</span>
                <strong>$ {cartTotal}</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
