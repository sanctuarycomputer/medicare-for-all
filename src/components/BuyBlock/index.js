import React, { Component } from 'react';
import cx from 'classnames';
import styles from './BuyBlock.scss';

class BuyBlock extends Component {
  handleFormSubmit(event) {
    event.preventDefault();
    // buy stuff
  }

  render() {
    return (
      <div className={cx(styles['BuyBlock'], 'content-width mxauto relative p1 flex flex-col justify-center items-center mb8')}>
        <img
          className='col-12 md:col-7 fit-contain mt1'
          src={this.props.image.originalSrc}
          alt={this.props.image.altText}
        />
        <form
          className={cx(styles['BuyBlock__container'], 'flex justify-center items-center w100')}
          onSubmit={this.handleFormSubmit}
        >
          <div className={cx(styles['BuyBlock__box'], 'col-12 md:col-6 flex justify-center')}>
            <div className='col-12 md:col-8'>
              <ul className={cx(styles['BuyBlock__list'], 'shadow serif px2 py1 flex justify-between')}>
                <li>S</li>
                <li>M</li>
                <li>L</li>
                <li>XL</li>
                <li>XXL</li>
              </ul>
            </div>
          </div>
          <div className={cx(styles['BuyBlock__box'], 'col-12 md:col-6 flex justify-center')}>
            <div className='col-12 md:col-8'>
              <div className={cx(styles['BuyBlock__text'], 'shadow flex justify-center')}>
                <button className={cx(styles['BuyBlock__button'], 'px1 py1 w100')} type="sumbit">
                  <span className="serif">BUY NOW</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BuyBlock;
