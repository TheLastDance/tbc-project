import "./FullPostLoader.css"
import "../Skeleton.css"


export function FullPostLoader() {
  return (
    <div className="fullPostLoader">
      <div className="info">
        <div className="skeleton_title"></div>
        <div className="skeleton_photo_round"></div>
      </div>
      <div className="skeleton_text_body"></div>
      <div className="skeleton_text"></div>
      <div className="skeleton_social"></div>
    </div>
  )
}