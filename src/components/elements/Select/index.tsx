"use client"
import React from "react";
import {
  Select as SelectUi,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { SelectProps as SelectRadixProps } from "@radix-ui/react-select";

interface OptionsProps {
  label: string;
  value: string;
}

interface SelectProps extends SelectRadixProps {
  label?: string;
  placeholder?: string;
  options?: OptionsProps[];
}

export default function Select({ label, placeholder, options = [], ...props }: SelectProps) {
  const SelectElements = () => (
    <SelectUi name="test" {...props}>
      <SelectTrigger className="border-[#7186A0]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((el, i) => (
          <SelectItem value={el.value} key={i}>{el.label}</SelectItem>
        ))}
        {options.length === 0 && (
          <SelectGroup className="flex justify-center">
            <span>Data Tidak Ada</span>
          </SelectGroup>
        )}
      </SelectContent>
    </SelectUi>
  );

  if (label)
    return (
      <div className="mb-[18px]">
        <label className="text-[18px]">{label}</label>
        {SelectElements()}
      </div>
    );
  return SelectElements();
}
