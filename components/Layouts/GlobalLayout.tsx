import "./Layout.css"

export function GlobalLayout({ children }: ChildrenProps) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}
