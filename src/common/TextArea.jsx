import { forwardRef } from "react";

const TextArea = forwardRef((props, ref) => {
  const {
    label,
    error,
    helperText,
    fullWidth = true,
    className = "",
    disabled,
    readOnly,
    id,
    name,
    required,
    rows = 4,
    ...rest
  } = props;

  const baseTextAreaClasses = `
    px-2 sm:px-2 py-2 rounded
    border-[1.5px] border-black/25
    text14 text-gray-900
    transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-(--primary)
    focus:border-transparent
    placeholder:text-gray-400
    resize-none
    ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-transparent"}
    ${readOnly ? "bg-gray-50 cursor-default" : ""}
    ${error ? "border-red-300 focus:ring-red-500" : ""}
    ${fullWidth ? "w-full" : ""}
  `;

  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label htmlFor={id} className="block text14 text-gray-950 mb-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <textarea
        ref={ref}
        id={id}
        name={name}
        rows={rows}
        disabled={disabled}
        readOnly={readOnly}
        className={`${baseTextAreaClasses} ${className}`}
        {...rest}
      />

      {error && <p className="mt-1 text12 text-red-600">{error}</p>}

      {helperText && !error && (
        <p className="mt-1 text12 text-gray-500">{helperText}</p>
      )}
    </div>
  );
});

TextArea.displayName = "TextArea";

export default TextArea;
