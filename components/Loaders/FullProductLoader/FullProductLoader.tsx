import "./FullProductLoader.css"
import ContentLoader from "react-content-loader"

export function FullProductLoader() {
  return (
    <div className="fullProductLoader">
      <ContentLoader
        rtl
        speed={0.7}
        width="100%"
        height={300}
        viewBox="0 0 1200 300"
        backgroundColor="black"
        foregroundColor="white"
        backgroundOpacity={0.1}
        gradientRatio={1.5}
      >
        <rect x="0" y="50" width="250" height="200" />
        <rect x="800" rx="5" y="40" width="400" height="30" />
        <rect x="950" rx="5" y="80" width="250" height="20" />
        <rect x="950" rx="5" y="110" width="250" height="20" />
        <rect x="800" rx="5" y="140" width="400" height="20" />
        <rect x="950" rx="5" y="170" width="250" height="20" />
        <rect x="950" rx="5" y="200" width="250" height="20" />
        <rect x="1100" rx="5" y="230" width="100" height="30" />
      </ContentLoader>
    </div>
  )
}
