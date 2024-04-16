"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  invalidMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, invalidMessage, ...props }, ref) => {
    const InputElements = () => (
      <input
        type={type}
        className={cn(
          "peer flex placeholder:text-[#C2C2C2] h-[50px] w-full border border-input border-[#7186A0] bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:border-[#36C2CF] disabled:cursor-not-allowed disabled:opacity-50",
          invalidMessage && "text-[#FF3434] border-[#FF3434] focus:text-[#FF3434] focus:-[#FF3434]",
          className
        )}
        ref={ref}
        {...props}
      />
    );

    if (label)
      return (
        <div className="mb-[18px]">
          <label className="text-[18px]">
            {label}
          </label>
          {InputElements()}
          {invalidMessage && (
            <p className="mt-2 invisible peer-invalid:visible text-[#FF3434] text-sm">
              {invalidMessage}
            </p>
          )}
        </div>
      );
    return InputElements();
  }
);
Input.displayName = "Input";

export { Input };
