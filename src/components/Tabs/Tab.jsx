import { useState } from "react";
import { wait } from "next/dist/lib/wait";

export default function Tab({ name, setSelected, targetId }) {
  let hovering = false
  return (
    <>
      <button
        type="button"
        className="w-1/10 px-4 mx-2 py-2 bg-transparent border-Highlight border rounded rounded-b-none border-b-0 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setSelected(targetId)}
        onMouseEnter={() => {
          hovering = true;
          wait(1400).then(() => {
            if ((hovering??false) && hovering===true) setSelected(targetId);
          });
        }}
        onMouseLeave={() => {
          hovering = false;
        }}>
        {name}
      </button>
    </>
  );
  
}