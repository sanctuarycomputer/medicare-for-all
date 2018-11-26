import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className={cx(styles['Hero'], 'vw100 flex flex-col items-center')}>
        <div className={(styles['Hero__circle-container'], 'w100 h100 fixed absolute flex items-center justify-center p2')}>
          <div className={cx(styles['Hero__circle'], 'fixed w100')}/>
        </div>
        <div className='absolute fixed t0 w100 h100 flex flex-col items-center justify-center'>
          <img className='col-10 my4' src='/assets/image-medicare.svg' alt='medicare'/>
          <img className='col-6 my4' src='/assets/image-for-all.svg' alt='for all'/>
        </div>
        <img className={cx(styles['Hero__logo'], 'absolute col-2 none lg:block' )} src='/assets/sanctu-compu-logo.svg' alt='sanctuary computer logo' />
      </div>
    );
  }
}

export default Hero;
