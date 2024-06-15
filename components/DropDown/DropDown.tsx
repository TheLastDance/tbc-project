"use client"
import { useToggle } from "@/services/hooks/useToggle"
import { Arrow } from "../Icons/Arrow";

interface IProps {
  header: React.ReactNode,
  children: React.ReactNode,
  defaultToggle?: boolean,
}

export function DropDown({ header, children, defaultToggle }: IProps) {
  const { toggle, handleToggle } = useToggle(defaultToggle);

  return (
    <div className="dropdown">
      <div className="dropdownHeader_container">
        {header}
        <button
          type="button"
          title={toggle ? "close" : "open"}
          className={toggle ? "resetButtonStyles dropdown_opened" : "resetButtonStyles"}
          onClick={handleToggle}
        >
          <Arrow />
        </button>
      </div>
      <div className="dropdownContent_container">
        {toggle ? children : null}
      </div>
    </div>
  )
}
