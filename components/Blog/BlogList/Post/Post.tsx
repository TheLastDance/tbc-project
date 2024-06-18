import "./Post.css";
import { Card } from "@/components/Card/Card";
import Link from "next/link";
import Image from "next/image";
import parse from 'html-react-parser';
import { FullPostButtons } from "../../FullPost/Buttons/FullPostButtons";
import { GlithHoverLink } from "@/components/UI/Links/GlithHoverLink";

interface IProps {
  item: IPostItem,
  admin?: boolean,
}

export function Post({ item, admin }: IProps) {
  const { title, body, id, added_on, user_serial, user_picture } = item;

  const utcDate = new Date(added_on).toLocaleDateString();

  return (
    <li className="post_container">
      <Card>
        {admin && <FullPostButtons title={title} body={body} id={id} admin />}
        <div className="titleAndPhoto_container">
          <h3>{title}</h3>
          <Link href={`/user/${user_serial}`}>
            <Image src={user_picture} alt="profile avatar" width={150} height={150} />
          </Link>
        </div>
        <div className="blog_text">{parse(body)}</div>
        <p>{utcDate}</p>
        <GlithHoverLink href={`/blog/${id}`} translationKey="button.viewFull" />
      </Card>
    </li>
  );
}
