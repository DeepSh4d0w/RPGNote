import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export function InputRoot(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-zinc-800 h-10 min-w-96 w-fit rounded-full overflow-clip flex flex-row justify-center items-center border border-zinc-400",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
