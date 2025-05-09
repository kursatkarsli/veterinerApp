import React from "react";
import { inputStyles } from "../config/styles";

const FloatingSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  className = "",
  ...props
}) => {
  return (
    <div className="relative mb-2">
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${inputStyles.select.base} ${className}`}
        placeholder=" "
        {...props}
      >
        <option value="" disabled hidden>
          {" "}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <label className={inputStyles.select.label}>{label}</label>
    </div>
  );
};

export default FloatingSelect;
