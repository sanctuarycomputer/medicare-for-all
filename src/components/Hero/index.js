import React, { Component } from 'react';
import cx from 'classnames';
import styles from './Hero.scss';

import MedicareLogo from 'components/MedicareLogo';
import ForAllLogo from 'components/ForAllLogo';
import SanctuLogo from 'components/SanctuLogo';

class Hero extends Component {
  render() {
    return (
      <div className={cx(styles['Hero'], 'vw100 flex flex-col items-center')}>
        <div className={(styles['Hero__circle-container'], 'w100 h100 fixed absolute flex items-center justify-center p2')}>
          <div className={cx(styles['Hero__circle'], 'fixed w100')}/>
        </div>
        <div className='absolute fixed t0 w100 h100 flex flex-col items-center justify-center'>
          <div className='col-10 my4'>
            <MedicareLogo />
          </div>
          <div className="col-6 my4">
            <ForAllLogo />
          </div>
        </div>
        <div className={cx(styles['Hero__logo'], 'absolute col-2 none lg:block')}>
          <SanctuLogo />
        </div>
      </div>
    );
  }
}

export default Hero;
