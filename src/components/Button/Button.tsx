import React, { FC } from 'react';
import './index.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <a href="#" className="button" onClick={onClick}>
      {label}
    </a>
  );
};

export default Button;
