import React from "react";
import { buttonStyles } from "../config/styles";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  ...props
}) => {
  const iconSize = buttonStyles.icon[size] || buttonStyles.icon.base;

  return (
    <button
      className={`${buttonStyles.base} ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className={iconSize}>{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
