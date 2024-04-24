import "./Layout.css"

export function GlobalLayout({ children }: {children: React.ReactNode}) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}
