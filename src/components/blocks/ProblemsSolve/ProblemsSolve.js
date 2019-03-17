import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ProblemsSolve.module.css';
import './ProblemsSolve.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import ProblemsSolveBackground from './assets/background.png';

import Container from "../../common/Container/Container";
import Author from "../Author/Author";

class ProblemsSolve extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired
  };

  static defaultProps = {
    heading: null,
    content: []
  };

  render() {
    return (
      <section className="ProblemsSolve">
        <Container className={styles.container}>
          <div className={styles.item}>
            <LazyLoadImage
              src={ProblemsSolveBackground}
              alt="ProblemsSolve"
              effect="opacity"
              className={styles.image}
            />
          </div>
          <div className={styles.item}>
            <h2 className={styles.heading}>
              {this.props.heading}
            </h2>
            {
              this.props.content.map(item =>
                <p
                  key={item}
                  className={styles.description}>
                  {item}
                </p>
              )
            }
            <div className={styles.author}>
              <Author
                username="Nikita Kostrov"
                position="Co-Founder & CEO"
                thumbnailUrl="https://pp.userapi.com/c830308/v830308045/13f4ec/9GpDOG7u-n0.jpg"
              />
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default ProblemsSolve;
