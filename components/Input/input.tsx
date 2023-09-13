import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function InputField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      type="text"
      className={twMerge(
        "w-full h-full bg-transparent outline-none px-2 placeholder:text-sm",
        props.className,
      )}
    />
  );
}
