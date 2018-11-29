import React, { Component } from "react";

import cx from 'classnames';
import styles from './ScrollToTop.scss';

class ScrollToTop extends Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0,
      showScroll: false
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let y = window.pageYOffset

    if (y > 100) {
      this.setState({ showScroll: true });
    }
    else {
      this.setState({ showScroll: false });
    }
  }

  render() {
    if (this.state.showScroll) {
      return (
        <div className={cx(styles['ScrollToTop'])}>
          <button
            className={cx(styles['ScrollToTop__button'], 'p1 z3 shadow fixed overflow-hidden flex items-center justify-center text-center')}
            onClick={() => {this.scrollToTop();}}>
            <span className="serif light-weight-font">To Top</span>
          </button>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default ScrollToTop
