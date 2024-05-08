import { useState } from "react";

export function useToggle(isToggled = false) {
  const [toggle, setToggle] = useState(isToggled);

  const handleToggle = () => {
    setToggle(prev => !prev);
  }

  const setToggleFalse = () => {
    if (toggle) setToggle(false);
  }

  const setToggleTrue = () => {
    if (!toggle) setToggle(true);
  }

  return { toggle, handleToggle, setToggleFalse, setToggleTrue };
}