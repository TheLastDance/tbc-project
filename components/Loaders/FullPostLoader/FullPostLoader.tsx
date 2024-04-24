import "./FullPostLoader.css"
import List from "react-content-loader"

export function FullPostLoader() {
  return (
    <div className="fullPostLoader">
      <List
        speed={1}
        backgroundColor="black"
        foregroundColor="white"
        backgroundOpacity={0.1}
        gradientRatio={1.5}
        rtl={true}
        width="100%"
        viewBox="0 0 420 100"
      />
    </div>
  )
}