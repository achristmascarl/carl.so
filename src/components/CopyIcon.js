import { useState, useRef } from "react";
import { c } from "../utils";
import copy from "copy-to-clipboard";
import { useEffect } from "react";

export default function CopyIcon({
  content,
  hwSize = "h-4 w-4",
  color = "fill-current",
}) {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  function copyContent() {
    copy(content);
    setCopied(true);
    timerRef.current = setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div
      className={c("h-fit w-fit tooltip", copied ? "" : "hover:cursor-pointer")}
      data-tip={copied ? "Copied!" : "Copy to clipboard"}
      onClick={() => copyContent()}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${hwSize} ${color}`}
          viewBox="0 0 20 20"
        >
          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
          {/* eslint-disable-next-line max-len */}
          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`${hwSize} ${color}`}
          viewBox="0 0 20 20"
        >
          {/* eslint-disable-next-line max-len */}
          <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
          <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
        </svg>
      )}
    </div>
  );
}
