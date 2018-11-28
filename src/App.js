import React, { Component } from 'react';
import get from "./utils/get";
import './styles/app.scss';

import Hero from './components/Hero';
import DetailBlock from './components/DetailBlock';
import BuyBlock from './components/BuyBlock';

import ShopifyGQLClient, {
  fetchProducts,
  checkoutCreate,
  checkoutLineItemsAdd
} from './lib/Apollo';

const Sizes = {
  SMALL: "S",
  MEDIUM: "M",
  LARGE: "L",
  EXTRA_LARGE: "XL",
  DOUBLE_EXTRA_LARGE: "2XL"
};

class App extends Component {
  constructor() {
    super(...arguments);

    this.state = { product: null, size: Sizes.MEDIUM, buttonText: "BUY NOW", quantity: 1, price: 0 }

  }

  componentWillMount() {
    ShopifyGQLClient.query({
      query: fetchProducts
    }).then(({ data }) => {
      this.setState({
        product: data.shop.products.edges.find(e => e.node.handle === "m4a-jersey").node
      });
    }).then(() => {
      this.calculateTotalPrice(this.state.quantity);
    });
  }

  selectSize = size => {
    if (!Object.values(Sizes).includes(size)) {
      throw new Error("Unsupported Size");
    }
    this.setState({ size }, () => this.calculateTotalPrice(this.state.quantity));
  }

  selectQuantity = quantity => {
    this.setState({ quantity }, () => this.calculateTotalPrice(quantity));
  }

  calculateTotalPrice = quantity => {
    let total = 0;
    for (let variant of this.state.product.variants.edges) {
      if (variant.node.title === this.state.size) {
        total += Number(variant.node.price) * Number(quantity);
      }
    }
    this.setState({ price: total.toFixed(2) })
  }

  calculateTotalPrice = (quantity) => {
    let total = 0;
    for (let variant of this.state.product.variants.edges) {
      if (variant.node.title === this.state.size) {
        total += Number(variant.node.price) * Number(quantity);
      }
    }
    this.setState({ price: total.toFixed(2) })
  }

  addToCart = () => {
    this.setState({
      buttonText: "loading...",
    })

    const variantId =
      this.state.product.variants.edges.find(e => e.node.title === this.state.size).node.id;
    const lineItems = [{ variantId, quantity: Number(this.state.quantity) }];
    return ShopifyGQLClient.mutate({
      mutation: checkoutCreate,
      variables: { input: {} }
    }).then(({ data }) => {
      const { id, webUrl } = data.checkoutCreate.checkout;
      return ShopifyGQLClient.mutate({
        mutation: checkoutLineItemsAdd,
        variables: { lineItems, checkoutId: id }
      }).then(() => {
        window.location.href = webUrl;
      });
    });
  }

  render() {
    if (!this.state.product) return "loading";
    return (
      <div className='App'>
        <Hero />
        <DetailBlock />
        <BuyBlock
          image={get(this.state.product, "images.edges[0].node", {})}
<<<<<<< HEAD
          sizes={Object.values(Sizes)}
          clickHandler={this.selectSize}
          size={this.state.size}
          buttonText={this.state.buttonText}
          formSubmit={this.addToCart}
          inputChange={this.selectQuantity}
          price={this.state.price}
          quantity={this.state.quantity}
=======
          buttonText={this.state.buttonText}
          formSubmit={this.addToCart}
          inputChange={this.selectQuantity}
<<<<<<< HEAD
>>>>>>> change button load state, implememt quantity selector
=======
          calculatePrice={this.calculateTotalPrice}
          price={this.state.price}
>>>>>>> add calculate total price func in app.js
        />
      </div>
    );
  }
}

export default App;
