import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Services.module.css';
import './Services.css';

import Container from "../../common/Container/Container";
import BlockTitle from "../BlockTitle/BlockTitle";

class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sliderViewport: 0,
      totalSlides: this.props.slider.length,
      currentSlide: this.props.currentSlide,
      currentCategory: this.props.categories[0]
    };
  }

  static propTypes = {
    heading: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    slider: PropTypes.array.isRequired,
    currentSlide: PropTypes.number
  };

  static defaultProps = {
    heading: null,
    categories: [],
    slider: [],
    currentSlide: 0,
    currentCategory: 0
  };

  /**
   * This function move the slider to the left
   */
  onClickPrev = () => {
    if (this.state.currentSlide > 0) {
      this.setState({
        currentSlide: this.state.currentSlide - 1,
        sliderViewport: this.state.sliderViewport + 750 + 30
      });
    }
  };

  /**
   * This function move the slider to the right
   */
  onClickNext = () => {
    if (this.state.currentSlide < this.state.totalSlides - 1) {
      this.setState({
        currentSlide: this.state.currentSlide + 1,
        sliderViewport: this.state.sliderViewport - 750 - 30
      });
    }
  };

  /**
   * This function change current category
   * @param category
   */
  changeCurrentCategory = (category) => {
    this.setState({
      currentCategory: category
    });
  };

  render() {
    return (
      <section className="Services">
        <Container className={styles.container}>
          <BlockTitle>
            Services
          </BlockTitle>
          <div className={styles.header}>
            <h3 className={styles.heading}>
              {this.props.heading}
            </h3>
            <div className={styles.navigation}>
              {
                this.props.categories.map(item =>
                  <button
                    key={item}
                    className={classNames(
                      styles.item,
                      this.state.currentCategory === item ? styles.itemCurrent : ''
                    )}
                    onClick={this.changeCurrentCategory.bind(this, item)}>
                    {item}
                  </button>
                )
              }
            </div>
          </div>
          <div
            className={styles.slider}
            style={{transform: `translateX(${this.state.sliderViewport}px)`}}>
            {
              this.props.slider.map(item =>
                item.category === this.state.currentCategory &&
                <div
                  key={item.id}
                  className={styles.slide}>
                  <img
                    src={item.url}
                    alt={item.alt}
                    className={styles.image}
                  />
                </div>
              )
            }
          </div>
          <div className={styles.arrows}>
            <button
              className={classNames(
                styles.arrow,
                styles.arrowLeft
              )}
              onClick={this.onClickPrev.bind(this)}
            />
            <button
              className={classNames(
                styles.arrow,
                styles.arrowRight
              )}
              onClick={this.onClickNext.bind(this)}
            />
          </div>
        </Container>
      </section>
    );
  }
}

export default Services;
