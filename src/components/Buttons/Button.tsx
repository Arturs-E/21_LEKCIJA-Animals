import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  additionalClasses?: string;
  clickHandler?: () => void;
}

const Button:FC<ButtonProps> = ({
  title, type, additionalClasses, clickHandler,
}) => (
  <button
    type={type || 'button'}
    className={`button ${additionalClasses}`}
    onClick={clickHandler}
  >
    {title}
  </button>
);

export default Button;
