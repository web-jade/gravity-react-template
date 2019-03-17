import React  from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import './BlockTitle.css';

class BlockTitle extends React.Component {
  static propTypes = {
    as: PropTypes.elementType
  };

  static defaultProps = {
    as: 'h2'
  };

  render() {
    const { as: Component, className, ...props } = this.props;
    return (
      <Component
        {...props}
        className={classNames(
          'BlockTitle',
          className
        )}
      />
    );
  }
}

export default BlockTitle;
