import "./Loader.css";

export function Loader({ size }: {size: string}) {
  return (
    <div className="loader-overlay" style={{ fontSize: size }}>
      <span className="loader" />
    </div>
  )
}
