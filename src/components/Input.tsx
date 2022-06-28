import { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      type="text"
      {...props}
      className={clsx(
        `w-full h-[50px] rounded px-5 text-base border-2 border-transparent
   focus:border-black outline-0 transition-all`,
        className
      )}
    />
  );
}
