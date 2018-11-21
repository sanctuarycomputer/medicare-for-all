import React, { Component } from 'react';
import './styles/app.scss';

import Hero from './components/Hero';
import DetailBlock from './components/DetailBlock';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Hero />
        <DetailBlock />
      </div>
    );
  }
}

export default App;
