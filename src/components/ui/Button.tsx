// text, variant- primary or seconndary, forward Ref, type of the button, startIcon, endIcon,size,loading,disabled

import type { ReactElement } from "react";
import Loader from "../icons/Loader";

const buttonVariants = {
  primary: "bg-primary text-white",
  secondary: "bg-secondary text-button-text",
};

export interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  disabled: boolean;
  loading: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  customClass?: string;
}

const sizeVariant = {
  sm: "px-2 py-1 rounded-sm text-sm font-medium",
  md: "px-4 py-2 rounded-md text-md font-medium",
  lg: "px-8 py-4 rounded-lg text-xl font-medium",
};

export default function Button(
  {
    text,
    variant = "primary",
    size,
    disabled,
    loading,
    startIcon,
    endIcon,
    onClick,
    customClass = "",
  }: ButtonProps,
  forwardedRef?: React.Ref<HTMLButtonElement>
) {
  return (
    <button
      ref={forwardedRef}
      disabled={disabled || loading}
      className={`${customClass} ${buttonVariants[variant]} ${sizeVariant[size]} flex items-center cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out`}
      onClick={onClick}
    >
      {/* {loading && <Loader />} */}
      {startIcon && <div>{startIcon}</div>}
      {<div className="pr-3 pl-3">{text}</div>}
      {endIcon && <div>{endIcon}</div>}
    </button>
  );
}
