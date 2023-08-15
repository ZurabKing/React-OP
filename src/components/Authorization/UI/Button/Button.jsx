import React from 'react';
import './Button.scss'
import classNames from 'classnames';

const Button = ({children, buttonColor, additionallyClass, onClick}) => {
  
  let buttonClass = classNames('button', `button-color_${buttonColor} ${additionallyClass}`)
  
  return (
    <button onClick={onClick} className={buttonClass}>{children}</button>
  );
};

export default Button;