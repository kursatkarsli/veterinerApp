import React from "react";

const Alert = ({
  children,
  variant = "info",
  title,
  className = "",
  onClose,
  ...props
}) => {
  const variants = {
    info: "bg-blue-50 text-blue-800 border-blue-200",
    success: "bg-green-50 text-green-800 border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    danger: "bg-red-50 text-red-800 border-red-200",
  };

  const icons = {
    info: "ℹ",
    success: "✓",
    warning: "⚠",
    danger: "✕",
  };

  return (
    <div
      className={`rounded-lg border p-4 ${variants[variant]} ${className}`}
      role="alert"
      {...props}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <span className="text-lg">{icons[variant]}</span>
        </div>
        <div className="ml-3 w-full">
          {title && <h3 className="text-sm font-medium mb-1">{title}</h3>}
          <div className="text-sm">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Close</span>
            <span className="text-lg">×</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
