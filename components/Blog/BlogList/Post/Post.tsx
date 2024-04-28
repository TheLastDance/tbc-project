import "./Post.css";
import { Card } from "@/components/Card/Card";
import { LocaleLink } from "@/components/Links/LocaleLink";
import Image from "next/image";
import photo from "@/public/img/blog/dogProfile.jpeg";
import { LikeIcon } from "@/components/Icons/Like";
import { TranslateText } from "@/components/TranslateText/TranslateText";

interface IProps {
  item: IPostItem
}

export function Post({ item }: IProps) {
  const { title, body, tags, reactions, id } = item;

  return (
    <Card>
      <div className="titleAndPhoto_container">
        <h3>{title}</h3>
        <Image src={photo} alt="profile avatar" width={150} height={150} />
      </div>
      <p className="blog_text">{body}</p>
      <p>2024-02-11</p>
      <div className="post_info">
        <ul>
          {tags.map((item, index) => (
            <li className="blog_tag" key={index}>
              <LocaleLink href="/">{`#${item}`}</LocaleLink>
            </li>
          ))}
        </ul>
        <button type="button" className="post_info_like_button">
          <LikeIcon />
          <span>{reactions}</span>
        </button>
      </div>
      <LocaleLink href={`/blog/${id}`} className="post_viewFullButton" role="button">
        <TranslateText translationKey="button.viewFull" />
      </LocaleLink>
    </Card>
  );
}
