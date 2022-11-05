import React from "react";
import clsx from "clsx";

interface HeaderProps {
  title?: string;
  className?: string;
}

export function Header({ title, className }: HeaderProps) {
  return (
    <header className={clsx(`w-screen`, className)}>
      <div className={`flex items-center justify-center`}>
        <h1 className={`text-[32px] text-black font-bold`}>
          {title ? title : "Agenda de eventos"}
        </h1>
      </div>
    </header>
  );
}
