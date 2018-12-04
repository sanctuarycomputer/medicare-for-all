import React, { Component } from 'react';
import cx from 'classnames';

import styles from './DetailBlock.scss';

class DetailBlock extends Component {
  render() {
    return (
      <div className={cx(styles['DetailBlock__content'], 'flex flex-col items-center p2 content-width mxauto')}>
        <div className="relative col-10">
          <div className='relative'>
            <div className="aspect-four-three w100">
              <div
                style={{ backgroundImage: "url('/assets/image-shirt-detail-1-hover.jpg')" }}
                className={cx(styles['DetailBlock__image'], 'shadow-light')}>
              </div>
              <div
                style={{ backgroundImage: "url('/assets/image-shirt-detail-1.jpg')" }}
                className={cx(styles['DetailBlock__image'], 'shadow-light')}>
              </div>
            </div>
          </div>
        </div>
        <div
          className={cx(styles['DetailBlock__image-group-container'],
          'w100 relative flex flex-col items-start md:flex-row md:justify-between md:mt4')}
          >
          <div className={cx(styles['DetailBlock__text1-container'], 'col-12 md:col-3 p1 bg-white z1 shadow my1')}>
            <p className={cx(styles['DetailBlock__paragraph'], 'serif light-weight-font mb2')}>Medicare for All (employees)</p>
            <p className={cx(styles['DetailBlock__paragraph'], 'serif light-weight-font mb2')}>
              In the USA, employers are only required to contribute 50% to the cost of an employee’s health insurance. In the case the employer simply meets that requirement, the remainder of the cost is syphoned out of the employee’s paycheck.
            </p>
            <p className={cx(styles['DetailBlock__paragraph'], 'serif light-weight-font')}>
              We believe healthcare is a human right, plain and simple.
            </p>
          </div>
          <div className={cx(styles['DetailBlock__image2-container'], 'col-12 md:col-8 my1')}>
            <div className={cx(styles['DetailBlock__image2'], 'col-12 md:col-9 right fit-contain z0 shadow-light')}>
              <div className='relative'>
                <div className="aspect-five-three w100">
                  <div
                    style={{ backgroundImage: "url('/assets/image-shirt-detail-2-hover.jpg')" }}
                    className={cx(styles['DetailBlock__image'], 'shadow-light')}>
                  </div>
                  <div
                    style={{ backgroundImage: "url('/assets/image-shirt-detail-2.jpg')" }}
                    className={cx(styles['DetailBlock__image'], 'shadow-light')}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={cx(styles['DetailBlock__image3'], 'col-12 md:col-4 z1 w100 h100 fit-contain shadow-light my1 relative')}>
            <div className='relative'>
              <div className="aspect-three-four w100">
                <div
                  style={{ backgroundImage: "url('/assets/image-shirt-detail-3-hover.jpg')" }}
                  className={cx(styles['DetailBlock__image'], 'shadow-light')}>
                </div>
                <div
                  style={{ backgroundImage: "url('/assets/image-shirt-detail-3.jpg')" }}
                  className={cx(styles['DetailBlock__image'], 'shadow-light')}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w100 relative flex flex-col md:flex-row-reverse md:justify-between md:items-start md:mt4'>
          <div className='col-12 md:col-5'>
            <div className={cx(styles['DetailBlock__text2-container'], 'bg-white col-12 md:col-8 shadow p1 my1')}>
              <p className={cx(styles['DetailBlock__paragraph'], 'serif light-weight-font mb2')}>
                While we can’t change the labor laws in this
                country, we have a responsibility to our team
                members to create the change we want to see
                in our own environment — and for that reason,
                starting November 2018, Sanctuary Computer
                is committed to offering at least one of our
                healthcare plans with 100% coverage,
                indefinitely.*
              </p>
              <p className={cx(styles['DetailBlock__paragraph'], 'serif light-weight-font mb2')}>
                To offset the extra cost, we’re selling this
                sweatshirt. And who knows, it may encourage
                your employer to do the same... ¯\_(ツ)_/¯
              </p>
              <p className={cx(styles['DetailBlock__paragraph'], 'serif light-weight-font')}>
                * It also means a yearly personal saving of
                roughly between $1000 — $3000 USD,
                (depending the plan).
              </p>
            </div>
          </div>
          <div className={cx(styles['DetailBlock__image4'], 'col-12 md:col-5 fit-contain shadow-light my1 md:mx2 relative')}>
            <div className='relative'>
              <div className="aspect-four-three w100">
                <div
                  style={{ backgroundImage: "url('/assets/image-shirt-detail-4-hover.jpg')" }}
                  className={cx(styles['DetailBlock__image'], 'shadow-light')}>
                </div>
                <div
                  style={{ backgroundImage: "url('/assets/image-shirt-detail-4.jpg')" }}
                  className={cx(styles['DetailBlock__image'], 'shadow-light')}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx(styles['DetailBlock__logo'], 'w100 z1')}>
          <img className='col-12 my4' src='/assets/sanctu-compu-logo.svg' alt='Sanctuary Computer Logo' />
        </div>
      </div>
    );
  }
}

export default DetailBlock;
