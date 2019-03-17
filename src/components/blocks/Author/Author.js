import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Author.module.css';
import './Author.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

class Author extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
  };

  static defaultProps = {
    username: null,
    position: null,
    thumbnailUrl: null
  };

  render() {
    return (
      <div className="Author">
        <LazyLoadImage
          src={this.props.thumbnailUrl}
          alt={`Author: ${this.props.username}`}
          className={styles.thumbnail}
        />
        <div className={styles.body}>
          <h4 className={styles.username}>
            {this.props.username}
          </h4>
          <p className={styles.position}>
            {this.props.position}
          </p>
        </div>
      </div>
    );
  }
}

export default Author;
