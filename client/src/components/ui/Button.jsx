import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ variant, className, children, ...props }) => {
  const baseStyle = 'px-4 py-2 font-semibold rounded focus:outline-none focus:ring-2';
  const variants = {
    outline: 'border border-gray-400 text-gray-700',
    solid: 'bg-blue-500 text-white hover:bg-blue-600',
  };

  const buttonClass = classNames(
    baseStyle,
    variants[variant] || variants['solid'],
    className
  );

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['outline', 'solid']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
