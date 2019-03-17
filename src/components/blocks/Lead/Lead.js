import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Lead.module.css';
import './Lead.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import LeadBackground from './assets/background.png';
import VideoBackground from './assets/video.png';

import Container from "../../common/Container/Container";
import Button from "../../common/Button/Button";

class Lead extends Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };

  static defaultProps = {
    heading: null,
    description: null
  };

  render() {
    return (
      <section className="Lead">
        <Container className={styles.container}>
          <h1 className={styles.heading}>
            {this.props.heading}
          </h1>
          <p className={styles.description}>
            {this.props.description}
          </p>
          <Button
            href="/"
            theme="primary">
            Get started
          </Button>
        </Container>
        <div
          className={styles.background}
          style={{backgroundImage: `url('${LeadBackground}')`}}>
          <div className={styles.player}>
            <LazyLoadImage
              src={VideoBackground}
              alt="Video player"
              effect="opacity"
              className={styles.video}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Lead;
