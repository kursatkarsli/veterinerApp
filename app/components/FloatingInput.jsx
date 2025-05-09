import React from "react";
import { inputStyles } from "../config/styles";

const FloatingInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputStyles.base} ${className}`}
        placeholder=" "
        {...props}
      />
      <label className={inputStyles.label}>{label}</label>
    </div>
  );
};

export default FloatingInput;
