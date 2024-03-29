import "./Post.css"
import { Card } from "../../Card/Card"
import { Link } from "react-router-dom";
import like_icon from "../../../assets/icons/like-icon.svg";

export function Post({ item }) {
  const { title, body, tags, reactions, date, photo } = item;

  return (
    <Card>
      <div className="titleAndPhoto_container">
        <h3>{title}</h3>
        <img src={photo} alt="profile avatar" />
      </div>
      <p className="blog_text">{body}</p>
      <p>{date}</p>
      <div className="post_info">
        <ul>
          {tags.map((item, index) =>
            <li className="blog_tag" key={index}>
              <Link to="/">{`#${item}`}</Link>
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
