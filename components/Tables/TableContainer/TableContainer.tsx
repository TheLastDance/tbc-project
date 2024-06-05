import "./TableContainer.css"

export function TableContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="table_container">
      <div className="table_UI">
        {children}
      </div>
    </section>
  )
}
