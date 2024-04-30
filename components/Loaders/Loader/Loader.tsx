import "./Loader.css";

interface IProps {
  size?: string;
}

export function Loader({ size }: IProps) {
  return (
    <div className="loader-overlay" style={{ fontSize: size }}>
      <span className="loader" />
    </div>
  );
}
