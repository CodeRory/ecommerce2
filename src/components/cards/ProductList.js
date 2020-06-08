import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../../context";

import '../cards/cards.css';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div >
          <div className="containerTitleAndCards">
            <Title name="Our" title="guitars" />

            <div className="allCardsSection" style={{border: 'solid', borderColor: 'blue'}} >
              <ProductConsumer >
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
