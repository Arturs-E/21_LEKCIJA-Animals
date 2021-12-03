import React, { FC } from 'react';
import './Button.scss';

type ButtonProps = {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  additionalClasses?: string;
  clickHandler?: () => void;
  includesCloseIcon?: boolean;
}

const Button:FC<ButtonProps> = ({
  title,
  type,
  additionalClasses,
  clickHandler,
  includesCloseIcon,
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
