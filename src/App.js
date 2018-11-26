import React, { Component } from 'react';
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
  EXTRA_LARGE: "XL"
};

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = { product: null, size: Sizes.MEDIUM }
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

  selectSize(size) {
    if (!Object.values(Sizes).includes(size)) {
      throw new Error("Unsupported Size");
    }
    this.setState({ size });
  }

  addToCart = () => {
    const variantId = 
      this.state.product.variants.edges.find(e => e.node.title === this.state.size).node.id;
    const lineItems = [{ variantId, quantity: 1 }];
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
      <div className='app'>
        <Hero />
        <DetailBlock />
        <BuyBlock />
      </div>
    );
  }
}

export default App;
