import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import classList from './classList';
import './index.css';

interface ButtonPropTypes {
  children: ReactNode,
  type?: string,
  className?: string,
  disabled?: boolean,
  onClick?: any,
};

function Button({ type = 'primary', className = '', children, ...props }:ButtonPropTypes ) {
  const cls = `${classList[type]} ${className}`;
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
}
export default Button;
