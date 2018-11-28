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
  DOUBLE_EXTRA_LARGE: "XXL"
};

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = { product: null, size: Sizes.MEDIUM, buttonText: "BUY NOW", quantity: 0 }

    this.selectQuantity = this.selectQuantity.bind(this);
  }

  componentWillMount() {
    ShopifyGQLClient.query({
      query: fetchProducts
    }).then(({ data }) => {
      this.setState({
        product: data.shop.products.edges.find(e => e.node.handle === "m4a-jersey").node
      });
    });
  }

  selectSize = size => {
    if (!Object.values(Sizes).includes(size)) {
      throw new Error("Unsupported Size");
    }

    this.setState({ size });
  }

  selectQuantity(quantity) {
    this.setState({ quantity })
  }

  addToCart = () => {
    this.setState({
      buttonText: "LOADING...",
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
          sizes={Object.values(Sizes)}
          clickHandler={this.selectSize}
          size={this.state.size}
          buttonText={this.state.buttonText}
          formSubmit={this.addToCart}
          inputChange={this.selectQuantity}
        />
      </div>
    );
  }
}

export default App;
