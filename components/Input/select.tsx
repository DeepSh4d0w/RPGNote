import { SelectHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  list: {
    value: string;
    title: string;
  }[];
}

export function InputSelect(props: InputSelectProps) {
  return (
    <select
      {...props}
      className={twMerge("bg-zinc-800 h-full w-fit", props.className)}
    >
      {props.list.map((option) => (
        <option className="bg-zinc-800" value={option.value}>
          {option.title}
        </option>
      ))}
    </select>
  );
}
