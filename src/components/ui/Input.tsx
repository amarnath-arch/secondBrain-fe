import type React from "react";
import { forwardRef, type ReactElement } from "react";

interface inputProps {
  type: string;
  placeholder: string;
  forwardedRef: React.Ref<HTMLInputElement>;
  size: "sm" | "md" | "lg";
  customClass?: string;
}

const inputSize = {
  sm: "px-2 py-1",
  md: "px-4 py-2",
  lg: "px-6 py-4",
};

const defaultStyles = "mt-5 w-full hover:shadow-secondary shadow-md";

export default function Input({
  type,
  placeholder,
  forwardedRef,
  size = "sm",
  customClass,
}: inputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={forwardedRef}
      className={`bg-transparent ${inputSize[size]} outline-slate-100 border-slate-100 border rounded-lg ${defaultStyles} hover:shadow-secondary ${customClass}`}
    />
  );
}
