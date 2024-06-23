import "./ProductCardLoader.css"
import "../Skeleton.css"


export function ProductCardLoader() {
  return (
    <div className="ProductCardLoader">
      <div className="skeleton_photo"></div>
      <div className="info">
        <div className="skeleton_title"></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_text"></div>
        <div className="skeleton_text_body"></div>
        <div className="skeleton_price"></div>
        <div className="skeleton_button_container">
          <div className="skeleton_button"></div>
        </div>
      </div>
    </div>
  )
}
