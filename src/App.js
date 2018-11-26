import React, { Component } from 'react';
import './styles/app.scss';

import Hero from './components/Hero';
import DetailBlock from './components/DetailBlock';
import BuyBlock from './components/BuyBlock';

class App extends Component {
  render() {
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
