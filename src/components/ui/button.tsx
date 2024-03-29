import React, { ReactNode } from "react";
import { LuLoader } from "react-icons/lu";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      children,
      variant = "primary",
      size = "md",
      onClick,
      loading: isLoading,
      ...props
    },
    ref
  ) => {
    let sizeClass = "";
    let variantClass = "";

    switch (size) {
      case "sm":
        sizeClass = "px-2 py-1 text-sm";
        break;
      case "md":
        sizeClass = "px-3 py-2";
        break;
      case "lg":
        sizeClass = "px-4 py-2 text-lg";
        break;
      default:
        sizeClass = "px-3 py-2";
        break;
    }

    switch (variant) {
      case "primary":
        variantClass = "bg-primary text-white";
        break;
      case "secondary":
        variantClass = "bg-gray-200 text-gray-800";
        break;
      case "danger":
        variantClass = "bg-red-500 text-white";
        break;
      default:
        variantClass = "bg-primary text-white";
        break;
    }

    return (
      <>
        <button
          {...props}
          ref={ref}
          onClick={onClick}
          className={`rounded-md cursor-pointer flex gap-2 items-center justify-center ${sizeClass} ${variantClass} ${className}`}
        >
          {isLoading && <LuLoader className="animate-spin" />}
          {children}
        </button>
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
