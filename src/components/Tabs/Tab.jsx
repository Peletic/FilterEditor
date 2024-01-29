import { useRef, useState } from "react";
import { wait } from "next/dist/lib/wait";

export default function Tab({ name, setSelected, targetId, selected }) {
  let hovering = false
  const buttonRef = useRef(null)
  let primaryMouseButtonDown = false;
  
  function setPrimaryButtonState(e) {
    const flags = e.buttons !== undefined ? e.buttons : e.which;
    primaryMouseButtonDown = (flags & 1) === 1;
  }
  
  document.addEventListener(`mousedown`, setPrimaryButtonState);
  document.addEventListener(`mousemove`, setPrimaryButtonState);
  document.addEventListener(`mouseup`, setPrimaryButtonState);
  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="w-1/10 px-4 mx-2 py-2 border-Highlight border rounded rounded-b-none border-b-0 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => setSelected(targetId)}
        onMouseEnter={() => {
          hovering = true;
          wait(2000).then(() => {
            if ((hovering??false) && hovering===true && primaryMouseButtonDown === true && selected !== targetId) {
              setSelected(targetId)
              buttonRef.current.classList.add(`bg-Highlight`)
              buttonRef.current.classList.remove(`hover:bg-gray-50`)
              wait(400).then(() => {
                buttonRef.current.classList.remove(`bg-Highlight`)
                buttonRef.current.classList.add(`hover:bg-gray-50`)
              })
            }
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