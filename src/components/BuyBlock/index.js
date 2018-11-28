import React, { Component } from 'react';
import cx from 'classnames';
import styles from './BuyBlock.scss';

class BuyBlock extends Component {

  componentDidMount() {
    document.getElementById('input').addEventListener('keypress', function (e) {
      if (e.key === '.') {
        e.preventDefault()
      }
    });
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
          onSubmit={(event) => {
            event.preventDefault();
            this.props.formSubmit();
          }}
        >
          <div className="col-12 md:col-6">
            <div className={cx(styles['BuyBlock__box'], 'flex justify-center')}>
              <div className="col-12 md:col-9">
                <ul className={cx(styles['BuyBlock__list'], 'shadow serif bg-white flex flex-wrap justify-center')}>
                  <div className={cx(styles['BuyBlock__list--border'], 'overlay events-none')}></div>
                  {
                    this.props.sizes.map(size => {
                      return (
                        <li
                          className={cx(styles['BuyBlock__list--item'], 'pointer p1 text-center relative', {'BuyBlock__list--item--selected___13RyP': this.props.size === size})}
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
          <div className={cx(styles['BuyBlock__box'], 'col-12 md:col-6 flex justify-center')}>
            <div className='col-12 md:col-8'>
              <div className={cx(styles['BuyBlock__text'], 'shadow flex justify-center')}>
<<<<<<< HEAD
                <div className="col-3 flex flex-col">
                  <input
                    id="input"
                    className={cx(styles['BuyBlock__number-input'], 'serif light-weight-font p0 text-center w100 h100')}
                    type="number" min="1" value={this.props.quantity} pattern="[0-9]*"
=======
                <div className="col-6 flex flex-col">
                  <label className={cx(styles['BuyBlock__label'], 'serif light-weight-font bg-white flex items-center justify-center')} >QUANTITY:</label>
                  <input
                    className={cx(styles['BuyBlock__number-input'], 'serif text-center w100 h100')} type="number" min="1" placeholder={1}
>>>>>>> change button load state, implememt quantity selector
                    onChange={e => {
                      e.preventDefault();
                      this.props.inputChange(e.target.value)
                      this.props.calculatePrice(e.target.value)
                    }}
                    >
                  </input>
                </div>
<<<<<<< HEAD
                <div className="col-9">
                  <button className={cx(styles['BuyBlock__button'], 'bg-white px1 py1 w100')} type="sumbit">
                    <span className="serif">{this.props.buttonText} - ${this.props.price}</span>
<<<<<<< HEAD
=======
                <div className="col-6">
                  <button className={cx(styles['BuyBlock__button'], 'bg-white px1 py1 w100')} type="sumbit">
                    <span className="serif">{this.props.buttonText}</span>
>>>>>>> change button load state, implememt quantity selector
=======
>>>>>>> add calculate total price func in app.js
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
