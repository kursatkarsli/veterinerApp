import React from "react";
import { Link } from "react-router";

const Card = ({
  children,
  className = "",
  variant = "default",
  header,
  footer,
  ...props
}) => {
  const variants = {
    default: "bg-white hover:bg-gray-50",
    primary: "bg-blue-50 hover:bg-blue-100",
    secondary: "bg-gray-50 hover:bg-gray-100",
    success: "bg-green-50 hover:bg-green-100",
    warning: "bg-yellow-50 hover:bg-yellow-100",
    danger: "bg-red-50 hover:bg-red-100",
    info: "bg-cyan-50 hover:bg-cyan-100",
    purple: "bg-purple-50 hover:bg-purple-100",
    pink: "bg-pink-50 hover:bg-pink-100",
    indigo: "bg-indigo-50 hover:bg-indigo-100",
    teal: "bg-teal-50 hover:bg-teal-100",
    orange: "bg-orange-50 hover:bg-orange-100",
    vet: {
      blue: "bg-vet-card-blue hover:bg-vet-card-blue-hover",
      green: "bg-vet-card-green hover:bg-vet-card-green-hover",
      yellow: "bg-vet-card-yellow hover:bg-vet-card-yellow-hover",
      pink: "bg-vet-card-pink hover:bg-vet-card-pink-hover",
    },
  };

  const getVariantClass = (variant) => {
    if (variant.startsWith("vet.")) {
      const [, color] = variant.split(".");
      return variants.vet[color];
    }
    return variants[variant] || variants.default;
  };

  return (
    <div
      className={`rounded-lg shadow-sm border transition-colors duration-200 ${getVariantClass(
        variant
      )} ${className}`}
      {...props}
    >
      {header && (
        <div className="px-6 py-4 border-b">
          {typeof header === "string" ? (
            <h3 className="text-lg font-medium">{header}</h3>
          ) : (
            header
          )}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t bg-gray-50 rounded-b-lg">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
