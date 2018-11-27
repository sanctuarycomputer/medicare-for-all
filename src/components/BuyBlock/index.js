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
          <div className="col-12 md:col-6">
            <div className={cx(styles['BuyBlock__box'], 'flex justify-center')}>
              <div className="col-12 md:col-9">
                <ul className={cx(styles['BuyBlock__list'], 'shadow serif bg-white flex flex-wrap justify-between')}>
                  <div className={cx(styles['BuyBlock__list--border'], 'overlay events-none')}></div>
                  {
                    this.props.sizes.map(size => {
                      return (
                        <li
                          className={cx(styles['BuyBlock__list--item'], 'px2 py1 relative')}
                          onClick={(event) => {
                            event.preventDefault()
                            this.props.clickHandler(size)
                          }}>
                          {size}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 md:col-6">
            <div className={cx(styles['BuyBlock__box'], 'flex justify-center')}>
              <div className='col-12 md:col-9'>
                <div className='shadow flex justify-center'>
                  <button className={cx(styles['BuyBlock__button'], 'p1 w100')} type="sumbit">
                    <span className="serif">BUY NOW</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BuyBlock;
