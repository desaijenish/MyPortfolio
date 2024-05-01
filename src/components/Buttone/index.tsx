import React, { FC, ReactNode } from "react";
import "./index.css";

interface ButtonProps {
  name: string;
  onClick: () => void;
  icon: ReactNode | undefined;
}

const Button: FC<ButtonProps> = ({ name, onClick, icon }) => {
  return (
    <button className="custom-btn btn-12" onClick={() => onclick}>
      <span style={{ padding: 5 }}>{icon}</span>
      <span>{name}</span>
    </button>
  );
};

export default Button;
