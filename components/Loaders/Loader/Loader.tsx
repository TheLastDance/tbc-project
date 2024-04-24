import "./Loader.css";

export function Loader({ size }: LoaderProps) {
  return (
    <div className="loader-overlay" style={{ fontSize: size }}>
      <span className="loader" />
    </div>
  );
}
