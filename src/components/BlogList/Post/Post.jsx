import "./Post.css"
import { Card } from "../../Card/Card"
import like_icon from "../../../assets/icons/like-icon.svg";

export function Post({ item }) {
  const { title, body, tags, reactions } = item;

  return (
    <Card>
      <h3>{title}</h3>
      <p className="blog_text">{body}</p>
      <div className="post_info">
        <ul>
          {tags.map((item, index) =>
            <li className="blog_tag" key={index}>
              <a href="/">{`#${item}`}</a>
            </li>
          )}
        </ul>
        <button className="post_info_like_button">
          <img src={like_icon} alt="like" />
          <span>{reactions}</span>
        </button>
      </div>
      <button type='button'>View full</button>
    </Card>
  )
}
