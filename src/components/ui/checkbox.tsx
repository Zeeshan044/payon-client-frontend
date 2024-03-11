import React from "react";
import { useState } from "react";

type CheckboxProps = {
  label: string;
  name: string;
  value: string;
  defaultChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  defaultChecked,
  onChange,
  value,
}) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        value={value}
        className="form-checkbox h-5 w-5 text-gray-600 hover:text-gray-900"
        checked={isChecked}
        onChange={(e) => {
          setChecked(e.target.checked);
          onChange(e);
        }}
      />
      <label
        htmlFor={name}
        className="ml-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
