import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Container.css';

class Container extends React.Component {
  static propTypes = {
    fluid: PropTypes.bool,
    as: PropTypes.elementType
  };

  static defaultProps = {
    as: 'div',
    fluid: false,
  };

  render() {
    const { fluid, as: Component, className, ...props } = this.props;
    return (
      <Component
        {...props}
        className={classNames(
          fluid ? `ContainerFluid` : `Container`,
          className
        )}
      />
    );
  }
}

export default Container;

