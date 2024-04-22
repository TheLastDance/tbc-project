import "./Loader.css";

export function Loader({ size }) {
  return (
    <div className="loader-overlay" style={{ fontSize: size }}>
      <span className="loader" />
    </div>
  )
}
