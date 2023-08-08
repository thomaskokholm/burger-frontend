import { HTMLAttributes, ReactNode } from "react";

export default function Button(
  props: {
    children?: ReactNode;
    kind?: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
) {
  const colorClass = (): string => {
    switch (props.kind) {
      case "secondary":
        return "bg-slate-600 hover:bg-slate-500 text-slate-100 hover:text-white focus-visible:ring-slate-600";

      case "primary":
      default:
        return "bg-blue-600 hover:bg-blue-500 text-blue-100 hover:text-white focus-visible:ring-blue-600";
    }
  };
  return (
    <button
      {...props}
      className={`
          "inline-flex justify-center rounded border border-transparent  px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 flex-nowrap items-center ${colorClass()} ${
        props.className
      }`}
    >
      {props.children && props.children}
    </button>
  );
}
