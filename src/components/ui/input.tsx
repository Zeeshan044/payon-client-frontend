import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  loading?: boolean;
  label?: string;
  name: string;
  id: string;
  onChangeValue?: (value: string) => void;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { error, loading, onChangeValue, className, label, name, ...props },
    ref
  ) => {
    return (
      <div className="flex flex-col mb-2">
        {label && <label htmlFor={name} className=" mb-2 text-charcoalGray">{label}</label>}
        <input
          type="text"
          name={name}
          {...props}
          ref={ref}
          className={`px-4 py-2 rounded-lg border-2 bg-white border-gray-300 text-black placeholder-black/60 ${className} `}
        />
        {error && <p className="text-red-600 text-sm font-medium">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "TextInput";
export default Input;
