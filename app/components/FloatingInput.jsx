import { forwardRef } from "react";

const FloatingInput = forwardRef(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          className={`
            peer
            w-full
            px-4
            py-2.5
            text-gray-700
            bg-[#e0e0e0]
            border-none
            rounded-[16px]
            shadow-[2px_2px_6px_#bebebe,-2px_-2px_6px_#ffffff,inset_1px_1px_2px_#bebebe,inset_-1px_-1px_2px_#ffffff]
            focus:outline-none
            focus:shadow-[0_0_0_2px_#a3a3a3,2px_2px_6px_#bebebe,-2px_-2px_6px_#ffffff]
            transition-all
            duration-200
            ${error ? "shadow-[0_0_0_2px_#ffb3b3,2px_2px_6px_#ffb3b3,-2px_-2px_6px_#fff0f0]" : ""}
            ${className}
          `}
          placeholder=" "
          {...props}
        />
        <label
          className={`
            absolute
            left-4
            -top-2.5
            px-1
            text-sm
            transition-all
            duration-200
            bg-[#e0e0e0]
            text-gray-500
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-gray-400
            peer-placeholder-shown:top-2.5
            peer-focus:-top-2.5
            peer-focus:text-sm
            peer-focus:text-gray-700
            ${error ? "text-red-500" : ""}
          `}
        >
          {label}
        </label>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput; 