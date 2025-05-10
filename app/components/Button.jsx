import React from "react";
import { buttonStyles } from "../config/styles";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  loading = false,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  const iconSize = buttonStyles.icon[size] || buttonStyles.icon.base;
  const baseClasses = `${buttonStyles.base} ${buttonStyles.variants[variant]} ${buttonStyles.sizes[size]} ${className}`;
  const stateClasses = `${disabled ? "opacity-50 cursor-not-allowed" : ""} ${
    fullWidth ? "w-full" : ""
  }`;

  return (
    <button
      className={`${baseClasses} ${stateClasses}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block animate-spin mr-2">⟳</span>
      ) : icon ? (
        <span className={iconSize}>{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
