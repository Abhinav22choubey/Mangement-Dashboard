import { forwardRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = forwardRef((props, ref) => {
  const {
    label,
    error,
    helperText,
    variant = "default",
    fullWidth = true,
    className = "",
    disabled,
    readOnly,
    id,
    name,
    type = "text",
    prefix,
    showPrefix = false,
    required,
    ...rest
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    if (type === "password") {
      setShowPassword((prev) => !prev);
      setInputType(showPassword ? "password" : "text");
    }
  };

  // Prefix padding logic
  const getPrefixPadding = () => {
    if (!showPrefix || !prefix) return "";

    if (typeof prefix === "string") {
      if (prefix.length === 1) return "!pl-8";
      if (prefix.length <= 3) return "!pl-10";
      return "pl-12";
    }
    return "!pl-10";
  };

  const baseInputClasses = `
    px-2 sm:px-2 py-2 rounded
    border-[1.5px] border-black/25
    text14 text-gray-900
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-(--primary)
    placeholder:text-gray-400 focus:border-transparent
    ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-transparent"}
    ${readOnly ? "bg-gray-50 cursor-default" : ""}
    ${error ? "border-red-300 focus:ring-red-500" : ""}
    ${fullWidth ? "w-full" : ""}
    ${getPrefixPadding()}
    ${type === "password" ? "pr-10" : ""}
  `;

  const containerClasses = `
    relative flex items-center
    ${fullWidth ? "w-full" : ""}
  `;

  const getPrefixPosition = () => {
    if (!showPrefix || !prefix) return "";
    if (typeof prefix === "string") {
      return prefix.length === 1 ? "left-2.5" : "left-3";
    }
    return "left-3";
  };

  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label htmlFor={id} className="block text14 text-gray-950 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <div className={containerClasses}>
        {/* Prefix */}
        {showPrefix && prefix && (
          <div
            className={`absolute ${getPrefixPosition()} top-1/2 -translate-y-1/2 z-10 flex items-center`}
          >
            {typeof prefix === "string" ? (
              <span
                className={`text-gray-500 font-medium ${
                  prefix.length === 1 ? "text16" : "text14"
                }`}
              >
                {prefix}
              </span>
            ) : (
              <div className="text-gray-500 w-4 h-4 flex items-center justify-center">
                {prefix}
              </div>
            )}
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          id={id}
          name={name}
          type={inputType}
          disabled={disabled}
          readOnly={readOnly}
          className={`${baseInputClasses} ${className}`}
          {...rest}
        />

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-4 h-4" />
            ) : (
              <Eye className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Error */}
      {error && <p className="mt-1 text12 text-red-600">{error}</p>}

      {/* Helper */}
      {helperText && !error && (
        <p className="mt-1 text12 text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
