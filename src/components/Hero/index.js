import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Hero.scss';

class App extends Component {
  render() {
    return (
      <div className={cx(styles['Hero'], 'vh100 vw100 relative p4 flex flex-col items-center')}>
        <div className={cx(styles['Hero__background-image'], 'col-10 h100 absolute t0')}/>
        <div className='absolute t0 w100 h100 p4 flex flex-col items-center justify-center'>
          <img className='col-10 my4' src='/assets/image-medicare.svg' alt='medicare'/>
          <img className='col-2 none lg:block' src='/assets/sanctu-compu-logo.svg' alt='sanctuary computer logo'/>
          <img className='col-6 my4' src='/assets/image-for-all.svg' alt='for all'/>
        </div>
      </div>
    );
  }
}

export default App;
