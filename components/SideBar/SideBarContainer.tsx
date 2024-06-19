import "./SideBarContainer.css"

export function SideBarContainer({ children }: { children: React.ReactNode }) {
  return (
    <nav className="sideBar_navigation">
      {children}
    </nav>
  )
}
