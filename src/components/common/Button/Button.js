import React  from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import './Button.css';

class Button extends React.Component {
  static propTypes = {
    as: PropTypes.elementType,
    href: PropTypes.string,
    theme: PropTypes.string
  };

  static defaultProps = {
    as: 'a',
    href: '/',
    theme: 'primary'
  };

  render() {
    const { as: Component, className, ...props } = this.props;
    return (
      <Component
        {...props}
        className={classNames(
          'Button',
          `Button_${this.props.theme}`,
          className
        )}
      />
    );
  }
}

export default Button;

