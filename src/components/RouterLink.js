import Link from "next/link";
import { c } from "../utils";

export default function RouterLink({ href, active, text }) {
  return (
    <Link
      className={c(
        active ? "bg-gray-50 font-bold" : "hover:bg-gray-50",
        "text-black",
        "px-3",
        "py-2",
        "rounded-md",
        "text-sm",
        "font-medium",
        "focus:outline-none",
        "focus:ring-2",
        "focus:ring-offset-2",
        "focus:ring-offset-gray-50",
        "focus:ring-white",
      )}
      href={href}
    >
      {text}
    </Link>
  );
}
