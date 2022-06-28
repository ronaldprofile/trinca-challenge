import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        `h-[50px] px-5 border border-black uppercase font-bold transition-colors rounded`,
        className
      )}
    >
      {children}
    </button>
  );
}
