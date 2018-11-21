import React, { Component } from 'react';
import cx from 'classnames';
import styles from './BuyBlock.scss';

class BuyBlock extends Component {
  render() {
    return (
      <div className={cx(styles['BuyBlock'], 'p1 flex flex-col justify-center items-center mb8')}>
          <img
            className='col-12 md:col-9 fit-contain mt1'
            src='/assets/image-shirt-front.png'
            alt='front of shirt'
          />
        <div className={cx(styles['BuyBlock__container'], 'flex justify-center items-center w100')}>
          <div className={cx(styles['BuyBlock__box'], 'col-12 lg:col-6 flex justify-center')}>
            <div className='col-12 lg:col-8'>
              <ul className={cx(styles['BuyBlock__list'], 'shadow serif px2 py1 flex justify-between')}>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
              </ul>
            </div>
          </div>
          <div className={cx(styles['BuyBlock__box'], 'col-12 lg:col-6 flex justify-center')}>
            <div className='col-12 lg:col-8'>
              <div className={cx(styles['BuyBlock__text'], 'shadow serif flex justify-center')}>
                <span className="px1 py1">BUY NOW</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BuyBlock;