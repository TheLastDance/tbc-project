import "./FullProductSkeleton.css"
import "../Skeleton.css"

export function FullProductSkeleton() {
  return (
    <div className="fullProductSkeleton">
      <div className="skeleton_photo_big"></div>
      <div className="info">
        <div className="skeleton_title"></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_text_body"></div>
        <div className="skeleton_price"></div>
        <div className="skeleton_button_container">
          <div className="skeleton_social"></div>
          <div className="skeleton_button"></div>
        </div>
      </div>
    </div>
  )
}
