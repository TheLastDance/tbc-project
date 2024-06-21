import "./SideBarContainer.css"
import StraightArrow from "../Icons/StraightArrow"

export function SideBarContainer({ children, setToggle }: { children: React.ReactNode, setToggle: () => void }) {
  return (
    <nav className="sideBar_navigation">
      <div className="sideBar_button_container">
        <button type="button" className="resetButtonStyles" onClick={setToggle} title="slide out">
          <StraightArrow />
        </button>
      </div>
      {children}
    </nav>
  )
}
