import React, { ReactNode } from "react";
import { LuLoader } from "react-icons/lu";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary" | "danger" | "cancel";
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
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
      case "xl":
        sizeClass = "px-10 py-2";
      case "xxl":
        sizeClass = "px-14 py-2";
        break;
    }

    switch (variant) {
      case "primary":
        variantClass = "font-semibold text-white bg-gradient-to-r from-[#5271FF] to-[#40AFFF]";
        break;
      case "secondary":
        variantClass = "bg-gray-200 text-gray-800";
        break;
      case "danger":
        variantClass = "bg-red-500 text-white";
        break;
      case "cancel":
        variantClass = "bg-[#E2E8F0] text-black";
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
          className={`rounded-md cursor-pointer flex items-center justify-center ${sizeClass} ${variantClass} ${className}`}
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
