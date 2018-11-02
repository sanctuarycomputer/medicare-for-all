import React, { Component } from 'react';
import './styles/app.scss';

import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <Hero clssName='app' />
    );
  }
}

export default App;
