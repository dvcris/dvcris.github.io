import React from 'react';
import './styles.scss';

type Props = { text: string, type: "primary" | "secondary" };

export const Button: React.FC<Props> = ({ type, text }) => {
  return (
    <button className={`btn btn-${type}`}>
      <span className={`text text-${type}`}>{text}</span>
    </button>
  );
}

export { Button as default };